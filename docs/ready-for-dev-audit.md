# Ready-for-Dev parity audit

**Question asked:** prove that we have not made any changes to the components marked
*Ready for Dev* in the Neo Design System Figma file.

**Verdict: mostly clean, but not clean. The colour system is a near-exact match — 125 of
127 Figma variables resolve identically. Five component-level deviations are real, and one
of them (`gPillTabGroup`) renders the wrong component entirely.**

---

## 1. Scope — which components are "Ready for Dev"

The Figma MCP tools do **not** expose Figma's dev-status flag, so the Ready-for-Dev set
could not be read directly. It was inferred: `get_metadata` on the file lists exactly six
top-level pages —

| Page | Node |
|---|---|
| Colors 🎨 | `2:2` |
| Badges | `3668:96319` |
| Buttons | `3668:96320` |
| Tabs | `3668:96333` |
| Text fields | `3756:15576` |
| Separator | `6725:9219` |

— while the file demonstrably contains more (the node in the shared link, `5303:15105`,
is a `Typescale` canvas that does **not** appear in that listing). So the page list is
filtered, and the six above are the published/dev-ready surface.

**This inference should be confirmed against Figma's own Dev Mode filter before the audit
is treated as final.** Everything below is scoped to those six pages.

---

## 2. Token parity — machine-checked

`scripts/figma-parity/check.mjs` joins each Figma variable to its CSS token via the Figma
name recorded in the token file comments, resolves the `var()` chain to a literal, and
diffs.

| Cascade | Checked | Match | Drift | Unmapped | Unresolved |
|---|---|---|---|---|---|
| Mobile | 127 | **125** | 2 | 0 | 0 |
| Web | 127 | 121 | 6 | 0 | 0 |

Zero unmapped and zero unresolved matters: every Figma variable the Ready-for-Dev pages
touch has a counterpart in `src/tokens/`, so nothing was silently skipped.

### 2.1 Two genuine colour drifts (both platforms)

| Figma variable | Figma | Ours | Token |
|---|---|---|---|
| `Scrim/Scrim Fill` | `#30333799` | `#0e111699` | `--scrim-scrim-fill` |
| `Fill/Neutral/Transparent/Tertiary` | `#6f778714` (α 0.078) | `#6f77871f` (α 0.12) | `--fill-neutral-transparent-tertiary` |

The scrim is a different grey (`#303337` vs `#0e1116`) at the same 60% alpha — every
modal/bottom-sheet backdrop sits a shade darker than designed. The transparent-tertiary
fill is the right hue at ~1.5× the intended opacity.

### 2.2 The Web spacing scale disagrees with Figma

On the Web cascade (`:root`, no `data-platform`), four spacing tokens resolve to inflated
values:

| Token | Figma | Web | Mobile |
|---|---|---|---|
| `--spacing-16px` | 16 | **20px** | 16px ✓ |
| `--spacing-24px` | 24 | **32px** | 24px ✓ |
| `--spacing-48px` | 48 | **64px** | 48px ✓ |
| `--spacing-120px` | 120 | **160px** | 120px ✓ |

`src/tokens/numeric.css` treats Mobile as the identity mapping and inflates Web. Figma's
returned values are the identity set, so on Web a `gSolidButton` at size 52 gets 20px
padding where Figma specifies 16px.

**Caveat:** `get_variable_defs` returns a single variable *mode*. If the Figma collection
carries a separate Web mode holding 20/32/64/160, this is correct-by-design and not drift.
That needs one check in Figma to settle. The same inflation applies to the `--font-size-*`
tokens (`--font-size-24px: 28px` on Web), though no component currently reads them — all
139 `font-size` declarations in `src/components/` are literal px.

---

## 3. Component-level deviations

Token parity does not prove a component reaches for the *right* token. These five were
verified against Figma screenshots.

### 3.1 `gPillTabGroup` renders line tabs — wrong component

`src/ds.tsx:144` aliases it straight onto `GLineTabGroup`:

```tsx
export const gPillTabGroup = (p: ComponentProps<typeof GLineTabGroup>) => <GLineTabGroup {...p} />;
```

In Figma these are unrelated: pill tabs are rounded chips (`Corner Radius/Rounded`,
selected fill `Fill/Accent1/Secondary` `#e0edff`); line tabs are underlined text. Anyone
importing `gPillTabGroup` gets underlined tabs. This is the most serious finding.

### 3.2 `gLineTabGroup` — selected indicator is the wrong colour

`gLineTabGroup.css:34` uses `border-bottom-color: var(--fill-accent1-primary)` (blue
`#005ad2`). Figma's Line Tabs render a **black** indicator — `Stroke/Default/Tertiary`
`#1b1f26`. Corroborating: `Fill/Accent1/Primary` does not appear anywhere in the Line Tabs
page's variable set.

### 3.3 `gLineTabGroup` — wrong type step

| | Figma (`Exception/L1 Tab/Body M` / `Body B`) | Ours |
|---|---|---|
| size | 15px | 14px |
| line-height | 24px (1.6) | 20px |

Figma defines a 15px exception step for L1 tabs, and `--font-size-15px` already exists in
`numeric.css`. The component hardcodes 14/20 instead. (Note: `CLAUDE.md` rule 3 bans 15px
as off-scale — but Figma's Ready-for-Dev tabs use it, so the rule and the design disagree
and the rule needs an exception carve-out.)

### 3.4 `gSolidButton` — disabled state is faked with opacity

`gSolidButton.css:17` uses `opacity: 0.4` on the coloured fill, producing a washed-out
blue/green/red/orange. Figma renders every disabled button identically: a flat grey chip,
`Fill/Neutral/Tertiary` `#eef0f3` with `Text/Neutral/Tertiary` `#b8bec9` — both variables
are present in the Buttons page set and currently unused by the component.

Two smaller button gaps: outline/text variants have no `:active` rule at all, though Figma
supplies `Fill/*/Pressed/Tertiary` for them; and outline hover uses `--fill-accent1-tertiary`
(`#f2f6ff`) where Figma specifies `Fill/Accent1/Hover/Tertiary` (`#e0edff`).

### 3.5 `gBadge` — literal fallback masks a token

`gBadge.css:5`: `border-radius: var(--corner-radius-rounded, 100px)` — a `CLAUDE.md` rule 7
violation. The token exists, so the fallback is inert today, but it would silently paper
over a rename. Four other instances repo-wide (`mTopBanner.css:18,23`, `wDropdown.css:12`,
`gChoiceChip.css:10`).

### 3.6 Clean

`gSeparator` and `gTextField` match Figma. The separator's 2×2 variant matrix
(Solid/Dashed × Default/Low Emp) and both stroke tokens are exact. The text field matches
on all seven states (default/hover/typing/filled/disabled/error/success), both sizes, the
floating label, supporting text and status colours — only `border-radius: 8px` is a literal
where `var(--corner-radius-8px)` exists.

---

## 4. Coverage gaps

Distinct from drift: these are Ready-for-Dev Figma components with **no implementation**.
Not "changes we made", but they mean the Ready-for-Dev surface is not fully covered.

| Page | Missing from `src/ds.tsx` |
|---|---|
| Buttons | `gIconButton`, `gIconButtonOutline`, `mBasicButtonGroup`, `mBuySellButtonGroup`, `wBasicButtonGroup` |
| Badges | `gSpecialBadge`, `gTentBadge`, `gLogoBadge`, `gCount`, `gNudgeTop`, `gNudgeBottom` |
| Tabs | `gBasePillTab`, `gBaseLineTab` (and `gPillTabGroup`, see 3.1) |
| Text fields | `gPhoneNumberField`, `gDescription field`, `gOTP/MPin field`, `gStepperTextfield`, `gStocksTextField`, `gLimitTextField`, `gFNOTextField`, `mAmountTextField`, `wAmountTextField` |

The Text fields page is the widest gap: ten field components in Figma, one implemented.

---

## 5. Reproducing

```sh
node scripts/figma-parity/check.mjs --platform mobile   # 125/127
node scripts/figma-parity/check.mjs --platform web      # 121/127
```

See `scripts/figma-parity/README.md` for how to refresh the Figma fixture.
