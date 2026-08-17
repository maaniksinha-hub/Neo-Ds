# Neo-DS — agent-facing reference

Neo-DS is a React + TypeScript implementation of a Figma design system ("WIP Design System") for a trading/investing product. Storybook is the human-facing docs surface; this file is the repo-level "how to work here" layer — the rules and workflow an agent (or a human) needs *before* touching a component, not the per-component API docs (those live as JSDoc on each component, rendered by Storybook autodocs).

## Entry point

Import everything through the public barrel, using exact Figma names:

```tsx
import * as DS from './src/ds';
<DS.gSolidButton>Buy</DS.gSolidButton>
<DS.mScripList items={...} />
```

Don't import component implementation files directly (`./components/gSolidButton/gSolidButton`) — `ds.tsx` is the contract. It re-exports ~65 components under their exact Figma names, plus alias wrappers for components that Figma treats as separate variants but we implement as one component with a prop (e.g. `gOutlineButton` and `gTextButton` are both `GSolidButton` under the hood with a `variant` prop).

## Naming convention

Prefix tells you the platform the component was designed for:

- **`g` — Global.** Works on both Mobile and Web (buttons, badges, inputs, chips).
- **`m` — Mobile-only.** Bottom nav, bottom sheets, mobile app bars, home indicator.
- **`w` — Web-only.** Side nav, browser-frame-scale layouts, web tables/toasts.

React can't use lowercase-first JSX tags, so implementation files are PascalCase (`GSolidButton.tsx`) and `src/ds.tsx` maps them back to Figma's exact lowercase-first names (`gSolidButton`) at the barrel boundary. When adding a new component, follow this same two-layer pattern rather than inventing a new name — check Figma for the real name first.

## Discovery-first workflow

Before building a screen or picking a component:

1. **Check if a component already exists for the job** — walk the decision tree below, or scan `src/ds.tsx` by prefix (g/m/w) and category. Don't recreate something from primitives (raw `<div>` + tokens) if a named component already covers the case — that's a compliance violation in Figma's own rules, not just a style preference.
2. **Match platform to prefix.** A Mobile screen composes from `m`-prefixed and `g`-prefixed components; a Web screen composes from `w`-prefixed and `g`-prefixed components. Don't use `m`-only components (bottom nav, bottom sheet) on Web, or `w`-only components (side nav) on Mobile.
3. **Read the component's JSDoc block** (`USE` / `WHEN` / `PLATFORM` / `INSTEAD-OF`) above its function declaration before using it — it's the same text Storybook renders as the autodocs description, and it tells you the specific scenario the component was designed for vs. its siblings.

## Non-negotiable rules

These are hard constraints, not style preferences. All are already enforced in `src/tokens/` — never hardcode a value that bypasses them.

1. **Color is semantic, never literal hex.** Use `var(--fill-positive-primary)`, `var(--text-negative-primary)`, etc. — never `#00C853` or similar. Positive/negative colors always mean gain/loss in this domain; don't repurpose them for anything else (e.g. don't use "positive green" for a generic success toast unrelated to price movement).
2. **Spacing comes from the scale, not arbitrary pixels.** Valid steps: `0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 120` (as `var(--spacing-Npx)`). No `3px`, `5px`, `6px`, `10px`, etc. If a value must sit between two steps (e.g. a small arrow offset), derive it with `calc()` against a token rather than hardcoding a new pixel value.
3. **Font size lands on a scale step, and carries that step's line-height.** Valid sizes: `10, 12, 14, 16, 18, 20, 24, 28, 32, 40, 48, 56, 64` — nothing below 10px (`Caption/Small`), and no intermediate values (`13px`, `15px` are not steps). Weight is `400`, `500` or `600`; there is no `700`. Every `font-size` must be paired with its line-height, which is a pure function of the size:

   | size | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 28 | 32 | 40 | 48 | 56 | 64 |
   |---|---|---|---|---|---|---|---|---|---|---|---|---|---|
   | line-height | 16 | 16 | 20 | 24 | 24 | 28 | 32 | 36 | 40 | 48 | 56 | 64 | 72 |

   Never use a unitless ratio (`line-height: 1.4`) — it drifts off the scale. The full scale, with the Mobile/Web use case each step was designed for, is in `TypographyDoc` (`src/components/TypographyDoc`); treat it as the source of truth for which step a given use case resolves to.
4. **One primary CTA per screen.** Only one `gSolidButton` (filled/primary emphasis) visible per screen at a time. Secondary actions use `gOutlineButton`, tertiary use `gTextButton`.
5. **Every Mobile screen needs navigation chrome.** `mTopNav`/`mBaseAppBar` at the top and `mBottomNav` at the bottom (unless the screen is a modal/bottom-sheet flow layered over a screen that already has them).
6. **Shadows come from the elevation tier.** Three steps, defined in `src/tokens/semantic.css`: `var(--elevation-raised)` (tooltips, coach marks), `var(--elevation-overlay)` (dropdowns, menus, popovers), `var(--elevation-modal)` (modals, banners, framed surfaces). Never inline an `rgba()` shadow. A surface that casts its shadow in a non-default direction (bottom sheet upward, side panel leftward) composes its own offsets from `var(--shadow-color-high)` rather than inventing a color.
7. **A `var(--token)` reference must never carry a literal fallback.** `var(--corner-radius-16px, 16px)` silently papers over a token that doesn't exist — and `--corner-radius-16px` did not. Reference the real token bare, so a missing one fails loudly instead of quietly rendering an off-scale value.
8. **Picking text for an inverse surface: `primary` and `secondary` do not mean what they look like.** The two inverse text tokens behave differently across themes, and choosing wrong produces text that is readable in light and nearly invisible in dark:

   | token | light | dark | use it for |
   |---|---|---|---|
   | `--text-inverse-primary` | white | **white** (does not flip) | text on a *saturated* fill that keeps its colour in both themes — `--fill-accent1-primary`, `--fill-negative-primary`, solid buttons, selected chips |
   | `--text-inverse-secondary` | white | **near-black** (flips) | text on a *neutral inverse surface* — anything backed by `--fill-neutral-inverse-*`, since that fill itself flips from near-black to light-grey |

   The trap: `--fill-neutral-inverse-primary` flips but `--text-inverse-primary` does not, so pairing them gives 1.45:1 in dark mode. `mToast--inverse` is the reference implementation. The same split applies to `--icon-inverse-primary` / `--icon-inverse-secondary`.

## Platform rules (Mobile ↔ Web token mapping)

Some tokens resolve to different raw values per platform via `:root[data-platform="mobile"]` vs default `:root` (Web canonical) in `src/tokens/`. Web is the *absence* of the attribute. When building a screen, set `data-platform="mobile"` on the root only for Mobile contexts — don't hand-pick pixel values per platform, let the token do it. The dark palette works the same way, under `:root[data-theme="dark"]`.

In Storybook both axes are toolbar toggles (**Platform** and **Theme**, wired up in `.storybook/preview.tsx`). Platform defaults to *Auto*, which follows the component's Figma prefix — an `m` component documents itself with Mobile token values without each story opting in. Check a change in both themes before committing; the dark palette is a full 161-token set and is easy to break without noticing.

| Concern | Mobile | Web |
|---|---|---|
| Base spacing unit | same scale, denser default gaps in mobile-specific components | same scale, roomier default gaps in web layouts |
| Nav chrome | `mBottomNav` (bottom, tab bar) | `wSideNav` (side rail) |
| Overlay pattern | `mBottomsheet` (slides up from bottom) | modal/dialog centered, or `wToast` for transient feedback |
| App bar | `mBaseAppBar` / `mTopNav` | browser-frame or in-page header, no fixed app bar |

If you're unsure which value a token resolves to on a given platform, check `src/tokens/` directly rather than guessing — the CSS custom properties are the single source of truth, not this table.

## Component decision tree

Pick the *most specific* component that matches; fall back to a more general one only if nothing specific exists. Coverage is complete: `DS-BACKLOG.md` maps every named Figma component onto the ones implemented here, either 1:1 or as a documented prop variant (eight Figma button nodes are all `Button`; `wToast` and `mToast` are both `Toast`). If a Figma name is not in `src/ds.tsx`, do not assume it needs building — look it up:

```sh
npm run map gOutlineButton     # → <Button variant="outline">
npm run map Toast -- --reverse # → every Figma name that resolves here
npm run map                    # summary, and what is not yet resolvable
```

`tools/neo-map.mjs` reads `src/ds.tsx` and `DS-BACKLOG.md` on every run rather than keeping a generated copy, so there is nothing to fall out of date. The barrel is the stronger source — TypeScript checks it, and it names the variants the backlog only tallies. 130 Figma names resolve, 86 of them importable directly. Six groups the backlog records as counts ("All 8 text field nodes") cannot resolve until those nodes are named individually.

- **Need the user to take an action?**
  → Primary emphasis: `gSolidButton` · Secondary: `gOutlineButton` · Tertiary/inline: `gTextButton` · Selectable filter/tag: `gChoiceChip`
- **Need to collect input?**
  → Free text: `gTextField` · Search: `gSearchBar` · Binary toggle: `gSwitch` · Single choice: `gRadioButton` · Multi-select: `gCheckbox`
- **Need to show a list of items?**
  → Scrips/instruments: `mScripList`, `gScripCards` · Balances: `mBalanceList` · Research/trade ideas: `mResearchIdeas` · Generic table (Web): `wTable`
- **Need navigation?**
  → Mobile bottom: `mBottomNav` · Mobile top: `mTopNav`/`mBaseAppBar` · Web side: `wSideNav` · Tabs: `gLineTabGroup`
- **Need to display data/status?**
  → Price movement: `gWithdrawalDepositBadge`/price-change components · Status/state: `gBadge`, `gStatusTimeline` · Charts: see `Charts` components (line, bar, grouped bar, stacked bar, tooltip, axis labels, legend) — always compose from these, never hand-roll an SVG chart
- **Need transient feedback?**
  → Web: `wToast` · Mobile: `mBottomBanner` · Onboarding/pointer: `gCoachMark`, `gTooltip`
- **Need a container/overlay?**
  → Mobile sheet: `mBottomsheet` · Scrim/backdrop: `gScrim` · Web frame chrome: `wBrowserFrame`
- **Nothing above fits** → check Figma for the real component name before building from primitives. Recreating a component from raw tokens when a named one exists is a compliance violation, not a shortcut.

## Journeys

A screen is not a deliverable; a flow is. `journeys/*.json` names the steps of a
flow, the components each screen composes from, and the states each screen owes.
`npm run journey` checks them, and it enforces the two rules below that live
above CSS where `npm run check` cannot see them — rule 4 (one primary CTA per
screen) and rule 5 (mobile nav chrome), plus that every component named actually
resolves and matches the journey's platform.

```sh
npm run journey                  # check every journey
npm run journey place-an-order   # check one
npm run journey -- --matrix      # screens × states, and what is not designed yet
```

A step marked `"overlay": true` is exempt from rule 5: a bottom sheet layers over
a screen that already carries the chrome. `journeys/place-an-order.json` is the
worked example — copy its shape rather than inventing one.

## Screen pattern recipes (condensed)

These are common screen shapes in this domain. Compose from the components above; don't rebuild the shell each time. A journey file turns a sequence of these into something checkable.

- **Watchlist** — `mTopNav` → search/filter row (`gSearchBar`, `gChoiceChip`) → `mScripList` (repeating scrip rows with live price + change) → `mBottomNav`.
- **Home / Discovery** — `mTopNav` → hero/summary card → horizontally scrolling `mCarousel` of `gScripCards` or `mResearchIdeas` → sectioned lists → `mBottomNav`.
- **Portfolio** — `mTopNav` (account summary) → `mBalanceList` (holdings) → performance chart (`Charts` line + tooltip) → `mBottomNav`.
- **Order entry** — triggered from a scrip screen, presented as `mBottomsheet` on Mobile (modal on Web): price/qty inputs (`gTextField`), buy/sell toggle, single `gSolidButton` CTA at the bottom, never stacked with a second primary button.
- **Bottom sheet (generic)** — `mBottomsheet` + `mHomeIndicator`, scrim behind (`gScrim`), one primary action max.
- **Web trading dashboard** — `wSideNav` (left) → multi-panel grid: watchlist table (`wTable`) + chart panel (`Charts`) + order panel, no bottom nav (Web never uses `mBottomNav`).
- **Scrip detail** — app bar with scrip name/price → chart with axis labels/legend → tabs (`gLineTabGroup`) for Overview/Financials/News → sticky buy/sell CTA row at the bottom (Mobile) or side panel (Web).
- **F&O homepage** — similar shell to Home/Discovery, but list items favor `mBasketCard`/`mScripicons` groupings over single scrip rows, reflecting multi-leg instruments.

## Verification checklist before committing a component change

1. `npx tsc -b` clean.
2. `npx storybook build` clean (or `npm run storybook` and eyeball the changed story in both themes).
3. No off-scale font sizes, weights, or missing/mismatched line-heights.
4. No hardcoded colors in `src/components/` — no hex, no `rgba()`, no `hsl()`. Literal color values belong in `src/tokens/` only.
5. No raw `px` in `padding`/`margin`/`gap` — use `var(--spacing-Npx)`.
6. Every `var(--…)` reference resolves to something defined in `src/tokens/`, with no literal fallback.
7. If the change affects Storybook doc text, confirm the JSDoc block still renders correctly on the autodocs page.
8. `npm run build-storybook && npm run audit:contrast` clean.

`audit:contrast` (`scripts/contrast-audit.mjs`) renders every story in both themes and reports text failing WCAG AA. Read its output correctly — the two sections mean different things:

- **Asymmetric failures (fails in one theme only) are always bugs, and the script exits non-zero on them.** A correctly mapped token pair contrasts the same way on both sides, so a one-sided failure means a token that flips has been paired with one that doesn't. This is the check that catches rule 8 violations.
- **Symmetric failures (fails in both) are palette values, not code.** Some of the system's own colours — `--text-neutral-tertiary` most of all — sit below AA by design in both themes. Don't "fix" those in a component by substituting a different token; that breaks the semantic meaning to chase a number. Raise them as a design decision instead.

Checks 3–6 are no longer greps you have to remember. They are `npm run check`:

```sh
npm run check                      # all of 3-6, plus more, in under a second
npm run check src/components/gBadge  # scope it while iterating
npm run check -- --json            # machine-readable, for CI or an agent
```

`tools/neo-check.mjs` is one file, no dependencies, and every rule in it is a
rule stated above in prose. It exits 2 on findings. Twelve rules today:

| rule | catches |
|---|---|
| `off-scale-spacing` | a px value that is not a spacing step |
| `raw-spacing-px` | an on-scale px literal that should be `var(--spacing-Npx)` |
| `off-scale-font-size` | a size off the 13-step ramp |
| `line-height-missing` / `line-height-mismatch` | a size without its paired line-height, or the wrong pair |
| `unitless-line-height` | `line-height: 1.4` — a ratio drifts off the scale |
| `banned-weight` | any weight other than 400/500/600 |
| `raw-color` | hex/rgb/hsl/oklch outside `src/tokens/` |
| `inline-shadow` | a literal colour in a shadow instead of an elevation token |
| `token-fallback` | `var(--x, 16px)` — rule 7 |
| `undefined-token` | a `var()` that resolves nowhere |
| `inverse-text-pairing` | the rule-8 dark-mode trap, mechanically |

Waiving one line, when the value genuinely is not what the rule thinks it is
(a 1px hairline is a border role, not spacing), takes a comment naming the
rule and the reason. There is no file-wide mute on purpose — that is how a
checker quietly stops checking:

```css
/* Hairline, not spacing — the gap shows the background as a key divider.
   neo-check-disable-next-line off-scale-spacing */
gap: 1px;
```

`npm run check:test` seeds one violation per rule and asserts each still
fires. Run it before trusting a clean report; "clean" and "broken" look
identical from the outside. `npm run check:all` chains the fast pass, a
Storybook build, and the contrast audit.
