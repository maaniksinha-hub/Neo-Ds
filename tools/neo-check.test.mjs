#!/usr/bin/env node
/**
 * One seeded violation per rule. If a rule stops firing, this fails.
 *
 *   node tools/neo-check.test.mjs
 *
 * A checker nobody proved is a checker nobody can trust — "clean" and "broken"
 * look identical from the outside.
 */
import assert from 'node:assert/strict'
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { check } from './neo-check.mjs'

const FIXTURE = `
.a { padding: 13px; }
.b { margin: 16px; }
.c { font-size: 13px; }
.d { font-size: 16px; line-height: 1.4; }
.e { font-size: 16px; }
.f { font-size: 16px; line-height: 20px; }
.g { font-weight: 700; }
.h { color: #fff; }
.i { box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); }
.j { border-radius: var(--corner-radius-8px, 8px); }
.k { color: var(--totally-invented-token); }
.l { background: var(--fill-neutral-inverse-primary); color: var(--text-inverse-primary); }
/* neo-check-disable-next-line off-scale-spacing */
.m { padding: 13px; }
`

const EXPECTED = [
  'off-scale-spacing',
  'raw-spacing-px',
  'off-scale-font-size',
  'unitless-line-height',
  'line-height-missing',
  'line-height-mismatch',
  'banned-weight',
  'raw-color',
  'inline-shadow',
  'token-fallback',
  'undefined-token',
  'inverse-text-pairing',
]

const dir = mkdtempSync(join(tmpdir(), 'neo-check-'))
try {
  writeFileSync(join(dir, 'seed.css'), FIXTURE)
  const found = check([dir])
  const ids = new Set(found.map((f) => f.rule))

  for (const rule of EXPECTED) {
    assert.ok(ids.has(rule), `rule "${rule}" did not fire on its seeded violation`)
  }

  // The waiver on .m must suppress exactly one finding, not the rule.
  const spacing = found.filter((f) => f.rule === 'off-scale-spacing')
  assert.equal(spacing.length, 1, 'the waived line should not be reported')

  console.log(`neo-check self-test: ${EXPECTED.length} rules fire, waiver holds`)
} finally {
  rmSync(dir, { recursive: true, force: true })
}
