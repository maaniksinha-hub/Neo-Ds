#!/usr/bin/env node
/**
 * neo-journey — check a whole flow, not one screen.
 *
 * Nobody ships a screen. They ship "user places an order", which is four
 * screens and every state of each. This expands a journey and enforces the
 * CLAUDE.md rules that live above CSS, where neo-check cannot see them:
 *
 *   rule 4  one primary CTA per screen
 *   rule 5  every mobile screen carries nav chrome
 *   +       every named component actually exists
 *   +       platform prefixes match the journey's platform
 *
 *   node tools/neo-journey.mjs                      check every journey
 *   node tools/neo-journey.mjs place-an-order       check one
 *   node tools/neo-journey.mjs --matrix             print screens × states
 *
 * Exit 2 on findings.
 *
 * ponytail: JSON rather than YAML, because JSON.parse is free and a YAML
 * subset parser is a dependency or forty lines of one. Swap if hand-authoring
 * these ever gets painful enough to be worth the parser.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join, basename } from 'node:path'
import { pathToFileURL } from 'node:url'
import { table } from './neo-map.mjs'

const DIR = 'journeys'
const PRIMARY_CTA = 'gsolidbutton'
const TOP_CHROME = ['mtopnav', 'mbaseappbar']
const BOTTOM_CHROME = ['mbottomnav']

export function checkJourney(journey, rows) {
  const known = new Map(rows.map((r) => [r.figma.toLowerCase(), r]))
  const findings = []
  const at = (step, rule, message) => findings.push({ journey: journey.journey, screen: step.screen, rule, message })

  const wanted = journey.platform === 'mobile' ? 'm' : 'w'
  const forbidden = wanted === 'm' ? 'w' : 'm'

  for (const step of journey.steps) {
    const names = step.components ?? []

    for (const name of names) {
      const row = known.get(name.toLowerCase())
      if (!row) {
        at(step, 'unknown-component', `"${name}" resolves to nothing — check the name with neo-map`)
        continue
      }
      if (row.platform === forbidden) {
        at(step, 'wrong-platform', `${name} is ${forbidden}-only, this journey is ${journey.platform}`)
      }
    }

    const ctas = names.filter((n) => n.toLowerCase() === PRIMARY_CTA)
    if (ctas.length > 1) {
      at(step, 'two-primary-cta', `${ctas.length} gSolidButton on one screen — rule 4 allows one`)
    }

    // Rule 5. An overlay sits on a screen that already carries the chrome.
    if (journey.platform === 'mobile' && !step.overlay) {
      const lower = names.map((n) => n.toLowerCase())
      if (!lower.some((n) => TOP_CHROME.includes(n))) {
        at(step, 'missing-nav-chrome', 'no mTopNav or mBaseAppBar — rule 5')
      }
      if (!lower.some((n) => BOTTOM_CHROME.includes(n))) {
        at(step, 'missing-nav-chrome', 'no mBottomNav — rule 5')
      }
    }

    const undeclared = (step.states ?? []).filter((s) => !journey.states.includes(s))
    if (undeclared.length) {
      at(step, 'undeclared-state', `${undeclared.join(', ')} not in the journey's states list`)
    }
  }
  return findings
}

const load = (file) => JSON.parse(readFileSync(file, 'utf8'))
const all = () => readdirSync(DIR).filter((f) => f.endsWith('.json')).map((f) => join(DIR, f))

// ── CLI ───────────────────────────────────────────────────────────────────
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2)
  const only = args.find((a) => !a.startsWith('--'))
  const files = only ? [join(DIR, `${basename(only, '.json')}.json`)] : all()
  const { rows } = table()

  if (args.includes('--check')) {
    // One seeded violation per rule. A clean report is only worth something
    // if the rules can still fail.
    const broken = {
      journey: 'seeded',
      platform: 'mobile',
      states: ['loading'],
      steps: [
        { screen: 'a', components: ['mTopNav', 'mBottomNav', 'gNotAThing'] },
        { screen: 'b', components: ['mTopNav', 'mBottomNav', 'wSideNav'] },
        { screen: 'c', components: ['mTopNav', 'mBottomNav', 'gSolidButton', 'gSolidButton'] },
        { screen: 'd', components: ['gTextField'] },
        { screen: 'e', components: ['mTopNav', 'mBottomNav'], states: ['nonsense'] },
      ],
    }
    const fired = new Set(checkJourney(broken, rows).map((f) => f.rule))
    const want = ['unknown-component', 'wrong-platform', 'two-primary-cta', 'missing-nav-chrome', 'undeclared-state']
    for (const rule of want) {
      if (!fired.has(rule)) { console.error(`neo-journey: rule "${rule}" did not fire`); process.exit(2) }
    }
    console.log(`neo-journey: ${want.length} rules fire`)
    process.exit(0)
  }

  const findings = []
  for (const file of files) {
    const journey = load(file)

    if (args.includes('--matrix')) {
      console.log(`\n${journey.journey}  (${journey.platform})`)
      for (const step of journey.steps) {
        const states = step.states ?? journey.states
        console.log(`  ${step.screen.padEnd(18)} ${states.join(' · ')}`)
        const missing = journey.states.filter((s) => !states.includes(s))
        if (missing.length) console.log(`  ${''.padEnd(18)} ${missing.join(' · ')}   ← not designed`)
      }
      const screens = journey.steps.length
      const designed = journey.steps.reduce((n, s) => n + (s.states ?? journey.states).length, 0)
      console.log(`  ${screens} screens, ${designed} screen-states to design`)
      continue
    }

    findings.push(...checkJourney(journey, rows))
  }

  if (args.includes('--matrix')) process.exit(0)

  if (findings.length === 0) {
    console.log(`neo-journey: ${files.length} journey${files.length === 1 ? '' : 's'} clean`)
    process.exit(0)
  }
  for (const f of findings) console.log(`${f.journey}/${f.screen}  ${f.rule}  ${f.message}`)
  console.log(`\n${findings.length} finding${findings.length === 1 ? '' : 's'}`)
  process.exit(2)
}
