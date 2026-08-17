#!/usr/bin/env node
/**
 * neo-map — the translator between Figma's vocabulary and this repo's.
 *
 * `wToast` and `mToast` are two components in Figma and one `Toast` here.
 * Eight button nodes are all `Button` with props. Designers say one thing, the
 * code says another, and every agent working across the two needs this table.
 *
 * Two sources, merged. src/ds.tsx is the stronger one — TypeScript checks it,
 * and it names the variants the backlog only tallies. DS-BACKLOG.md adds the
 * Figma page and the concept name for anything with no direct export.
 *
 * 130 names resolve today. Six groups the backlog records as counts ("All 8
 * button variant nodes") still cannot — run with no argument to list them.
 * Reconciling the true Figma total needs the AI Export, since a set of
 * variants is one component there and N nodes here.
 *
 *   node tools/neo-map.mjs gOutlineButton     Figma name  → code
 *   node tools/neo-map.mjs Button --reverse   code        → Figma names
 *   node tools/neo-map.mjs --json             the whole table
 *   node tools/neo-map.mjs --check            parse still works (CI)
 *
 * Both files are read on every run rather than generated into a third copy: a
 * copy is one more thing to fall out of date, which is the exact failure this
 * whole effort exists to remove.
 */
import { readFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const BACKLOG = 'DS-BACKLOG.md'
const BARREL = 'src/ds.tsx'
const ticked = (s) => [...s.matchAll(/`([^`]+)`/g)].map((m) => m[1])
const propsIn = (s) => Object.fromEntries([...s.matchAll(/([\w-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]))

/**
 * The barrel is the better half of the table: TypeScript checks it, so it
 * cannot drift the way prose does. It carries the variant names the backlog
 * only counts — `gOutlineButton` is an export here and a tally there.
 */
export function parseBarrel(file = BARREL) {
  const src = readFileSync(file, 'utf8')
  const rows = []

  // export { GSolidButton as gSolidButton } from '...'
  for (const m of src.matchAll(/export\s*{\s*(\w+)\s+as\s+([a-z]\w+)\s*}/g)) {
    rows.push({ figma: m[2], import: m[2], renders: m[1], source: 'barrel' })
  }
  // export const gOutlineButton = (p: ...) => <GSolidButton variant="outline" {...p} />
  for (const m of src.matchAll(/export\s+const\s+([a-z]\w+)\s*=[^;]*?<(\w+)([^>]*?)\{\.\.\.p\}/g)) {
    const props = propsIn(m[3])
    rows.push({
      figma: m[1],
      import: m[1],
      renders: m[2],
      ...(Object.keys(props).length ? { props } : {}),
      source: 'barrel',
    })
  }
  for (const r of rows) r.platform = /^[gmw]/.test(r.figma) ? r.figma[0] : null
  return rows
}

export function parse(file = BACKLOG) {
  const lines = readFileSync(file, 'utf8').split('\n')
  const start = lines.findIndex((l) => l.startsWith('## Coverage map'))
  if (start === -1) throw new Error(`no "## Coverage map" heading in ${file}`)

  const rows = []
  const unnamed = []
  let page = null

  for (const line of lines.slice(start)) {
    if (line.startsWith('### ')) { page = line.slice(4).trim(); continue }
    if (!line.startsWith('- ')) continue

    // One line can carry several mappings, separated by semicolons.
    for (const part of line.slice(2).split(';')) {
      const arrow = part.indexOf('→')
      if (arrow === -1) continue
      const left = part.slice(0, arrow)
      const right = part.slice(arrow + 1)

      const code = ticked(right)[0]
      if (!code) continue

      // `with \`size="big"\`` and friends. Prop *names* like (`color`/`size`
      // props) carry no value and are deliberately not captured.
      const props = propsIn(right)

      const figmaNames = ticked(left)
      if (figmaNames.length === 0) {
        // "All 8 button variant nodes → `Button`" — a count, not names.
        unnamed.push({ page, code, note: left.trim() })
        continue
      }
      for (const figma of figmaNames) {
        rows.push({
          figma,
          code,
          ...(Object.keys(props).length ? { props } : {}),
          platform: /^[gmw]/.test(figma) ? figma[0] : null,
          page,
          source: 'backlog',
        })
      }
    }
  }
  return { rows, unnamed }
}

/** Barrel first (compiler-checked), backlog for the rest (page + concept name). */
export function table() {
  const { rows: backlog, unnamed } = parse()
  const byName = new Map()
  for (const r of backlog) byName.set(r.figma.toLowerCase(), r)
  for (const r of parseBarrel()) {
    const prior = byName.get(r.figma.toLowerCase())
    byName.set(r.figma.toLowerCase(), { ...r, code: prior?.code, page: prior?.page })
  }
  return { rows: [...byName.values()], unnamed }
}

const lookup = (rows, name) => rows.filter((r) => r.figma.toLowerCase() === name.toLowerCase())
const reverse = (rows, name) =>
  rows.filter((r) => [r.code, r.renders, r.import].some((v) => v?.toLowerCase() === name.toLowerCase()))

const render = (r) => {
  const props = r.props
    ? ' ' + Object.entries(r.props).map(([k, v]) => `${k}="${v}"`).join(' ')
    : ''
  return `<${r.renders ?? r.code}${props}>`
}

const describe = (r) =>
  r.import
    ? `DS.${r.import}   renders ${render(r)}`
    : `${render(r)}   (no direct export — covered by a prop or slot)`

// ── CLI ───────────────────────────────────────────────────────────────────
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2)
  const flags = new Set(args.filter((a) => a.startsWith('--')))
  const name = args.find((a) => !a.startsWith('--'))
  const { rows, unnamed } = table()
  const exported = rows.filter((r) => r.import).length

  if (flags.has('--check')) {
    // The runnable check: both parsers still understand their file's shape.
    const assert = (cond, msg) => { if (!cond) { console.error(`neo-map: ${msg}`); process.exit(2) } }
    assert(rows.length > 100, `only ${rows.length} names resolved — a format probably changed`)
    assert(lookup(rows, 'mToast')[0]?.renders === 'MToast', 'mToast should resolve through the barrel')
    assert(lookup(rows, 'mBasketCard')[0]?.code === 'CollectionCard', 'backlog concept name should survive the merge')
    assert(lookup(rows, 'gOutlineButton')[0]?.props?.variant === 'outline', 'gOutlineButton should carry variant="outline"')
    assert(lookup(rows, 'wSideNav')[0]?.platform === 'w', 'platform should come off the name prefix')
    assert(reverse(rows, 'GChoiceChip').length >= 3, 'GChoiceChip should cover several Figma names')

    // Two rows for one name must agree. Otherwise the translator answers
    // differently depending on which line won, which is worse than no answer.
    const seen = new Map()
    for (const r of rows) {
      const key = r.figma.toLowerCase()
      if (seen.has(key)) assert(seen.get(key) === render(r), `${r.figma} resolves two ways — pick one`)
      seen.set(key, render(r))
    }
    console.log(`neo-map: ${rows.length} Figma names resolved (${exported} importable), ${unnamed.length} groups still counted rather than named`)
    process.exit(0)
  }

  if (flags.has('--json')) {
    console.log(JSON.stringify({ rows, unnamed }, null, 2))
    process.exit(0)
  }

  if (!name) {
    console.log(`${rows.length} Figma names resolved, ${exported} of them importable from src/ds.tsx`)
    console.log(`\n${unnamed.length} groups the backlog counts instead of naming, so they cannot resolve:`)
    for (const u of unnamed) console.log(`  ${u.note} → ${u.code}`)
    console.log('\nusage: neo-map <FigmaName> | <CodeName> --reverse | --json | --check')
    process.exit(0)
  }

  const hits = flags.has('--reverse') ? reverse(rows, name) : lookup(rows, name)
  if (hits.length === 0) {
    console.error(`neo-map: "${name}" not found in ${BARREL} or ${BACKLOG}`)
    process.exit(1)
  }
  for (const h of hits) console.log(`${h.figma}  →  ${describe(h)}`)
}
