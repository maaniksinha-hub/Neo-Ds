# Neo-DS

A React + TypeScript design system, built from the [WIP Design System Figma file](https://www.figma.com/design/6mcWWfhEB53QAkLZtVwbXP/WIP-Design-System).

## Stack

- React + TypeScript + Vite
- Tailwind CSS v4 (for the app shell) + plain CSS custom properties for design tokens
- Storybook for component documentation

## Design tokens

`src/tokens/` is generated from the Figma file's variable collections (Typography, Primitive Colors, Semantic Colors, Numeric Values):

- `primitives.css` — raw color scale (`--color-*`)
- `semantic.css` — semantic aliases resolved from primitives, with light/dark mode support (`:root` / `:root[data-theme="dark"]`)
- `typography.css` — font family tokens
- `numeric.css` — spacing, sizing, corner radius, breakpoints (Web mode canonical, Mobile overrides under `[data-platform="mobile"]`)

## Components

Implemented in `src/components/`, each with a Storybook story:

- `Button` — solid / outline / text variants, 4 types, 4 sizes
- `Badge` — filled / outline, 7 colors, 3 sizes
- `Tabs` — underline tab group
- `TextField` — floating-label input with default/error/success/disabled states
- `Separator` — solid/dashed, default/low-emphasis
- `StockCard` — from `gScripCards`: default / with-badge / insights variants, up/down price change
- `List` / `ListItem` — generalized list row (leading/trailing slots, subtitle, divider) from `mList`
- `Checkbox`, `RadioButton`, `Switch` — native inputs styled with tokens
- `Chip` — choice/action chips, buy/sell semantic types
- `Avatar` — initials/image, circle/square
- `Accordion` — plain/contained, from `mAccordionSmall`
- `Tooltip` — top/bottom/left/right/none arrow positions
- `Toast` — notification/success/error/warning/inverse states
- `Banner` — default/negative, from `mTopBanner`
- `SearchBar` — 32px/44px sizes
- `Note` — inline alert, 5 semantic types
- `Breadcrumb` — nav trail with current-page state
- `StatusIndicator` — timeline/step status (yet-to-start/in-process/completed/failed)
- `AppBar` — back/title/subtext/actions/CTA header, from `mBaseAppBar`
- `Scrim` — modal/sheet backdrop overlay
- `Modal` — centered dialog with header/body/footer
- `BottomSheet` — default/fullscreen, drag handle
- `Dropdown` — native select styled with tokens
- `Menu` — grouped menu popup with titles and separators
- `CoachMark` — onboarding tooltip, 4 arrow directions × 3 alignments
- `Table` — sortable columns, left/right alignment, from `wTableCell`/`wTableHeader`
- `BottomNav` — mobile tab bar, from `mBottomNav`
- `Carousel` — horizontal snap-scroll with dot indicators
- `SidePanel` — right-anchored drawer with header/body/footer
- `Loading` — `Spinner` (3 sizes) and `ProgressBar`
- `Charts` — `LineChart`, `BarChart`, `Legend`, `ChartDot` (custom SVG, no charting library dependency)
- `Keyboard` — numeric keypad, from `mKeyboard`
- `ColorsDoc` — token reference page (Foundations/Colors in Storybook)

See [DS-BACKLOG.md](./DS-BACKLOG.md) for the remaining ~73 components documented in Figma but not yet implemented, including the more complex chart types (grouped/stacked bars, gridlines/axes, live market indicator).

## Development

```bash
npm install
npm run dev          # app shell at localhost:5173
npm run storybook    # component docs at localhost:6006
npm run build         # typecheck + production build
```
