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
3. **Font size has a floor.** Nothing below 10px (`Caption/Small`). The full type scale is documented in `TypographyDoc` (`src/components/TypographyDoc`) — treat it as the source of truth for which step a given use case (label, body, heading) should resolve to.
4. **One primary CTA per screen.** Only one `gSolidButton` (filled/primary emphasis) visible per screen at a time. Secondary actions use `gOutlineButton`, tertiary use `gTextButton`.
5. **Every Mobile screen needs navigation chrome.** `mTopNav`/`mBaseAppBar` at the top and `mBottomNav` at the bottom (unless the screen is a modal/bottom-sheet flow layered over a screen that already has them).

## Platform rules (Mobile ↔ Web token mapping)

Some tokens resolve to different raw values per platform via `:root[data-platform="mobile"]` vs default `:root` (Web canonical) in `src/tokens/`. When building a screen, set `data-platform="mobile"` on the root only for Mobile contexts — don't hand-pick pixel values per platform, let the token do it.

| Concern | Mobile | Web |
|---|---|---|
| Base spacing unit | same scale, denser default gaps in mobile-specific components | same scale, roomier default gaps in web layouts |
| Nav chrome | `mBottomNav` (bottom, tab bar) | `wSideNav` (side rail) |
| Overlay pattern | `mBottomsheet` (slides up from bottom) | modal/dialog centered, or `wToast` for transient feedback |
| App bar | `mBaseAppBar` / `mTopNav` | browser-frame or in-page header, no fixed app bar |

If you're unsure which value a token resolves to on a given platform, check `src/tokens/` directly rather than guessing — the CSS custom properties are the single source of truth, not this table.

## Component decision tree

Pick the *most specific* component that matches; fall back to a more general one only if nothing specific exists in our 65-component set (Figma's full system has ~159; not everything has been ported yet — if you need something not listed, check Figma before building from primitives).

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

## Screen pattern recipes (condensed)

These are common screen shapes in this domain. Compose from the components above; don't rebuild the shell each time.

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
2. `npx storybook build` clean (or `npm run storybook` and eyeball the changed story).
3. No off-scale spacing/font-size values introduced (grep for raw `px` values outside the token scale).
4. No hardcoded hex colors.
5. If the change affects Storybook doc text, confirm the JSDoc block still renders correctly on the autodocs page.
