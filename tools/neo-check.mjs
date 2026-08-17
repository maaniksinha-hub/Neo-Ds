#!/usr/bin/env node
/**
 * neo-check — the deterministic half of CLAUDE.md.
 *
 * Every rule here is a rule already written in prose in CLAUDE.md. This file
 * is that prose as code, so an agent (or a human in a hurry) cannot skip it.
 *
 *   node tools/neo-check.mjs              scan src/
 *   node tools/neo-check.mjs src/components/gBadge
 *   node tools/neo-check.mjs --json       machine output
 *
 * Exit 0 = clean, 2 = findings, 1 = the checker itself broke.
 *
 * Contrast lives in scripts/contrast-audit.mjs and stays there: it needs a
 * Storybook build, this needs nothing. `npm run check` is the fast one you can
 * run on every save; `npm run check:all` adds contrast.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join, extname, relative } from 'node:path'
import { pathToFileURL } from 'node:url'

// ── The scales (CLAUDE.md, "Non-negotiable rules") ────────────────────────
const SPACING = new Set([0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80, 120])
const LINE_HEIGHT = new Map([
  [10, 16], [12, 16], [14, 20], [16, 24], [18, 24], [20, 28], [24, 32],
  [28, 36], [32, 40], [40, 48], [48, 56], [56, 64], [64, 72],
])
const WEIGHTS = new Set([400, 500, 600])

const SPACING_PROPS = /^(padding|margin|gap|row-gap|column-gap)(-(top|right|bottom|left|inline|block)(-(start|end))?)?$/
const COLOR_LITERAL = /#[0-9a-fA-F]{3,8}\b|\brgba?\(|\bhsla?\(|\boklch\(/
const PX = /(?<![\w.-])(-?\d*\.?\d+)px/g

// ── Tiny CSS walk ─────────────────────────────────────────────────────────
// Their CSS is plain and nested only inside at-rules, so a brace counter is
// enough. No parser dependency for something this shallow.
function stripComments(src) {
  // Keep newlines so line numbers survive.
  return src.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
}

function parseBlocks(src) {
  const clean = stripComments(src)
  const blocks = []
  let selectorStart = 0
  let stack = []

  for (let i = 0; i < clean.length; i++) {
    const ch = clean[i]
    if (ch === '{') {
      stack.push({ selector: clean.slice(selectorStart, i).trim(), bodyStart: i + 1 })
      selectorStart = i + 1
    } else if (ch === '}') {
      const open = stack.pop()
      if (!open) continue
      const body = clean.slice(open.bodyStart, i)
      // Only leaf blocks hold declarations; at-rule wrappers hold more blocks.
      if (!body.includes('{')) {
        blocks.push({
          selector: open.selector,
          decls: declarations(body, lineAt(clean, open.bodyStart)),
        })
      }
      selectorStart = i + 1
    }
  }
  return blocks
}

function declarations(body, startLine) {
  const out = []
  let line = startLine
  for (const chunk of body.split(';')) {
    const colon = chunk.indexOf(':')
    if (colon > -1) {
      const prop = chunk.slice(0, colon).trim().toLowerCase()
      const value = chunk.slice(colon + 1).trim()
      if (prop && !prop.startsWith('//')) {
        out.push({ prop, value, line: line + countNewlines(chunk.slice(0, colon)) })
      }
    }
    line += countNewlines(chunk)
  }
  return out
}

const countNewlines = (s) => (s.match(/\n/g) || []).length
const lineAt = (src, index) => countNewlines(src.slice(0, index)) + 1

// ── Rules ─────────────────────────────────────────────────────────────────
// Each takes the parsed file and pushes findings. One function per rule id.

function offScaleSpacing({ blocks }, add) {
  for (const b of blocks) {
    for (const d of b.decls) {
      if (!SPACING_PROPS.test(d.prop)) continue
      for (const [, n] of d.value.matchAll(PX)) {
        if (!SPACING.has(Math.abs(Number(n)))) {
          add('off-scale-spacing', d.line, `${d.prop}: ${d.value} — ${n}px is not a spacing step`)
        }
      }
    }
  }
}

function rawSpacingPx({ blocks }, add) {
  for (const b of blocks) {
    for (const d of b.decls) {
      if (!SPACING_PROPS.test(d.prop)) continue
      // On-scale but still literal: the token exists, so use it.
      for (const [, n] of d.value.matchAll(PX)) {
        if (SPACING.has(Math.abs(Number(n)))) {
          add('raw-spacing-px', d.line, `${d.prop}: ${d.value} — use var(--spacing-${Math.abs(Number(n))}px)`)
        }
      }
    }
  }
}

function typeScale({ blocks }, add) {
  for (const b of blocks) {
    const sizes = b.decls.filter((d) => d.prop === 'font-size')
    const heights = b.decls.filter((d) => d.prop === 'line-height')

    for (const d of sizes) {
      const px = pxValue(d.value)
      if (px === null) continue
      if (!LINE_HEIGHT.has(px)) {
        add('off-scale-font-size', d.line, `font-size: ${d.value} — not a step on the type scale`)
      }
    }

    for (const d of heights) {
      if (/^[\d.]+$/.test(d.value)) {
        add('unitless-line-height', d.line, `line-height: ${d.value} — a ratio drifts off the scale, use the paired px value`)
      }
    }

    // Size present, and its line-height either missing or the wrong pair.
    for (const d of sizes) {
      const px = pxValue(d.value)
      if (px === null || !LINE_HEIGHT.has(px)) continue
      const want = LINE_HEIGHT.get(px)
      const paired = heights.find((h) => pxValue(h.value) !== null)
      if (!paired) {
        add('line-height-missing', d.line, `font-size: ${px}px with no line-height — must pair with ${want}px`)
      } else if (pxValue(paired.value) !== want) {
        add('line-height-mismatch', paired.line, `font-size ${px}px needs line-height ${want}px, found ${paired.value}`)
      }
    }

    for (const d of b.decls) {
      if (d.prop !== 'font-weight') continue
      const n = Number(d.value)
      if (Number.isFinite(n) && !WEIGHTS.has(n)) {
        add('banned-weight', d.line, `font-weight: ${d.value} — only 400, 500, 600 exist`)
      }
    }
  }
}

const pxValue = (v) => {
  const m = /^(-?\d*\.?\d+)px$/.exec(v.trim())
  return m ? Number(m[1]) : null
}

function rawColor({ blocks }, add) {
  for (const b of blocks) {
    for (const d of b.decls) {
      if (d.prop.includes('shadow')) continue // inlineShadow owns those
      if (COLOR_LITERAL.test(d.value)) {
        add('raw-color', d.line, `${d.prop}: ${d.value} — literal colors belong in src/tokens only`)
      }
    }
  }
}

function inlineShadow({ blocks }, add) {
  for (const b of blocks) {
    for (const d of b.decls) {
      if (!d.prop.includes('shadow')) continue
      if (COLOR_LITERAL.test(d.value)) {
        add('inline-shadow', d.line, `${d.prop}: ${d.value} — compose from var(--shadow-color-*) or an elevation token`)
      }
    }
  }
}

function tokenFallback({ text }, add) {
  // var(--x, anything) — a fallback hides a token that does not exist.
  for (const m of text.matchAll(/var\(\s*(--[\w-]+)\s*,([^)]*)\)/g)) {
    add('token-fallback', lineAt(text, m.index), `var(${m[1]},${m[2]}) — drop the fallback so a missing token fails loudly`)
  }
}

function undefinedToken({ text }, add, { defined }) {
  // A component may declare its own custom properties (gTooltip does, to derive
  // an arrow offset with calc against a real token). Those are local and legal.
  const local = new Set([...text.matchAll(/^\s*(--[\w-]+)\s*:/gm)].map((m) => m[1]))
  for (const m of text.matchAll(/var\(\s*(--[\w-]+)/g)) {
    if (!defined.has(m[1]) && !local.has(m[1])) {
      add('undefined-token', lineAt(text, m.index), `var(${m[1]}) is not defined in src/tokens/ or this file`)
    }
  }
}

function inverseTextPairing({ blocks }, add) {
  // The dark-mode 1.45:1 trap: --text-inverse-primary does not flip,
  // --fill-neutral-inverse-* does. Pairing them is invisible text in dark.
  for (const b of blocks) {
    const onInverseFill = b.decls.some(
      (d) => /^(background|background-color|fill)$/.test(d.prop) && d.value.includes('--fill-neutral-inverse'),
    )
    if (!onInverseFill) continue
    for (const d of b.decls) {
      if (/(--text-inverse-primary|--icon-inverse-primary)/.test(d.value)) {
        add('inverse-text-pairing', d.line, `${d.value} on a --fill-neutral-inverse surface — that fill flips, this text does not. Use --text-inverse-secondary.`)
      }
    }
  }
}

const CSS_RULES = [offScaleSpacing, rawSpacingPx, typeScale, inverseTextPairing]
// Literal colors are what src/tokens/ is FOR. These two only run outside it.
const COMPONENT_RULES = [rawColor, inlineShadow]
const TEXT_RULES = [tokenFallback, undefinedToken]

// ── Runner ────────────────────────────────────────────────────────────────
function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (['.css', '.tsx', '.ts'].includes(extname(p))) out.push(p)
  }
  return out
}

function definedTokens(root) {
  const set = new Set()
  for (const file of walk(join(root, 'src', 'tokens'))) {
    for (const m of readFileSync(file, 'utf8').matchAll(/^\s*(--[\w-]+)\s*:/gm)) set.add(m[1])
  }
  return set
}

export function check(targets, root = process.cwd()) {
  const defined = definedTokens(root)
  const findings = []

  const files = targets.flatMap((t) => (statSync(t).isDirectory() ? walk(t) : [t]))

  for (const file of files) {
    const text = readFileSync(file, 'utf8')
    const rel = relative(root, file)
    // Waiver: `neo-check-disable-next-line <rule> — reason` in any comment.
    // Deliberately per-line and per-rule: a file-wide mute is how a checker
    // quietly stops checking.
    const waived = new Set()
    text.split('\n').forEach((l, i) => {
      const m = /neo-check-disable-next-line\s+([\w-]+)/.exec(l)
      if (m) waived.add(`${m[1]}:${i + 2}`)
    })
    const add = (rule, line, message) => {
      if (!waived.has(`${rule}:${line}`)) findings.push({ rule, file: rel, line, message })
    }

    const ctx = { text, blocks: extname(file) === '.css' ? parseBlocks(text) : [] }
    const isTokenFile = rel.startsWith(join('src', 'tokens'))
    if (ctx.blocks.length) {
      for (const rule of CSS_RULES) rule(ctx, add)
      if (!isTokenFile) for (const rule of COMPONENT_RULES) rule(ctx, add)
    }
    for (const rule of TEXT_RULES) rule(ctx, add, { defined })
  }
  return findings
}

// ── CLI ───────────────────────────────────────────────────────────────────
// Only when run directly — the self-test imports check().
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2)
  const json = args.includes('--json')
  const targets = args.filter((a) => !a.startsWith('--'))
  const findings = check(targets.length ? targets : ['src'])

  if (json) {
    console.log(JSON.stringify({ findings, count: findings.length }, null, 2))
  } else if (findings.length === 0) {
    console.log('neo-check: clean')
  } else {
    const byRule = new Map()
    for (const f of findings) byRule.set(f.rule, (byRule.get(f.rule) ?? 0) + 1)
    for (const f of findings) console.log(`${f.file}:${f.line}  ${f.rule}  ${f.message}`)
    console.log(`\n${findings.length} finding${findings.length === 1 ? '' : 's'}`)
    for (const [rule, n] of [...byRule].sort((a, b) => b[1] - a[1])) console.log(`  ${n}  ${rule}`)
  }

  process.exit(findings.length ? 2 : 0)
}
