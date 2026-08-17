# Figma parity check — "Ready for Dev" components

Mechanically verifies that every design token consumed by the Figma pages published
as **Ready for Dev** resolves in this codebase to exactly the value Figma holds.

```sh
node scripts/figma-parity/check.mjs                     # Web cascade (default)
node scripts/figma-parity/check.mjs --platform mobile   # Mobile cascade
node scripts/figma-parity/check.mjs --json              # machine-readable
```

Exit code `0` = parity, `1` = drift.

## How the mapping works

Every declaration in `src/tokens/` is preceded by a comment whose first segment is the
*exact* Figma variable name:

```css
/* Fill/Accent1/Primary — Primary brand color fill. Use for primary CTAs, ... */
--fill-accent1-primary: var(--color-blue-700);
```

That comment is the join key. The script resolves each token's `var()` chain down to a
literal, normalises colors to hex and numerics to bare numbers, and diffs against
`figma-ready-for-dev.json`.

The mapping is currently **complete**: all 127 distinct Figma variables used by the
Ready-for-Dev pages resolve to a token in `src/tokens/` — 0 unmapped, 0 unresolved.
That completeness is itself part of the proof: nothing is being skipped.

## Refreshing the fixture

`figma-ready-for-dev.json` is a captured snapshot, not a live query. Regenerate it with
the Figma MCP when the Figma file changes:

```
mcp__Figma__get_variable_defs(fileKey: "tZTYoGwfIc0iARnvsS58jF", nodeId: "<nodeId>")
```

The `nodeId` for each page is stored alongside its variables in the fixture.

## Caveats

- **Figma variable modes.** `get_variable_defs` returns one mode's resolved values. The
  captured numerics (`Spacing/16px` = 16) line up with this repo's *Mobile* cascade, not
  its Web cascade — see the spacing finding in the audit report. If the Figma collection
  has a separate Web mode, the fixture needs a per-mode capture before the Web spacing
  result can be called drift.
- **Colors are mode-independent here.** `data-platform` only overrides numerics in
  `src/tokens/numeric.css`, so the color findings hold on both platforms.
- **Tokens only.** This script proves token parity. Per-component structure (which token
  a component actually reaches for, variant coverage, states) is not machine-checked —
  those findings are in the audit report and were verified against Figma screenshots.
