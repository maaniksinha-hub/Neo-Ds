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
- `ColorsDoc` — token reference page (Foundations/Colors in Storybook)

See [DS-BACKLOG.md](./DS-BACKLOG.md) for the remaining ~117 components documented in Figma but not yet implemented.

## Development

```bash
npm install
npm run dev          # app shell at localhost:5173
npm run storybook    # component docs at localhost:6006
npm run build         # typecheck + production build
```
