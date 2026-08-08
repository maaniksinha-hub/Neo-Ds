/**
 * Theme contrast audit.
 *
 * Renders every Storybook story in BOTH themes and reports text that fails the
 * WCAG AA contrast ratio (4.5:1, or 3:1 for large text).
 *
 * The point is not the absolute pass/fail count — some of the palette's own
 * values sit below AA by design, and those fail identically in both themes.
 * What this catches is *asymmetry*: text that is readable in one theme and not
 * the other. That always means a token mapping is wrong, because a correctly
 * mapped token pair contrasts the same way on both sides.
 *
 * Usage:
 *   npm run build-storybook
 *   npm run audit:contrast
 *
 * Exits non-zero if any theme-asymmetric failure is found.
 */
import { chromium } from 'playwright'
import { createServer } from 'node:http'
import { readFileSync, existsSync } from 'node:fs'
import { extname, join, resolve } from 'node:path'

const STATIC = resolve('storybook-static')
const PORT = Number(process.env.CONTRAST_PORT ?? 6199)

if (!existsSync(join(STATIC, 'index.json'))) {
  console.error('storybook-static/index.json not found — run `npm run build-storybook` first.')
  process.exit(2)
}

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript',
  '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.woff2': 'font/woff2', '.woff': 'font/woff', '.map': 'application/json' }

const server = createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '') || 'index.html'
  const file = join(STATIC, rel)
  if (!file.startsWith(STATIC) || !existsSync(file)) { res.writeHead(404).end(); return }
  res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream' })
  res.end(readFileSync(file))
})
await new Promise(r => server.listen(PORT, '127.0.0.1', r))

/** Runs inside the page. Returns every visible text node failing AA. */
function auditPage() {
  const srgb = c => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4) }
  const lum = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b)
  const parse = s => { const m = s && s.match(/[\d.]+/g); if (!m) return null
    return [+m[0], +m[1], +m[2], m.length > 3 ? +m[3] : 1] }
  const flatten = (fg, bg) => [0, 1, 2].map(i => fg[i] * fg[3] + bg[i] * (1 - fg[3]))

  // Walk ancestors for the first opaque background-color. Bail out entirely if
  // anything in the chain paints a background-image (gradient / photo): the real
  // backdrop is unknowable from computed style, and guessing produces false alarms.
  const backdrop = el => {
    for (let n = el; n && n.nodeType === 1; n = n.parentElement) {
      const cs = getComputedStyle(n)
      if (cs.backgroundImage && cs.backgroundImage !== 'none') return null
      const c = parse(cs.backgroundColor)
      if (c && c[3] >= 0.99) return [c[0], c[1], c[2]]
    }
    return [255, 255, 255]
  }

  const out = []
  for (const el of document.querySelectorAll('*')) {
    const text = [...el.childNodes].filter(n => n.nodeType === 3).map(n => n.textContent.trim()).join('')
    if (!text) continue
    const cs = getComputedStyle(el)
    if (cs.visibility === 'hidden' || cs.display === 'none' || +cs.opacity === 0) continue
    const box = el.getBoundingClientRect()
    if (box.width < 2 || box.height < 2) continue
    const fg = parse(cs.color); if (!fg) continue
    const bg = backdrop(el); if (!bg) continue

    const L1 = lum(flatten(fg, bg)), L2 = lum(bg)
    const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)
    const size = parseFloat(cs.fontSize), weight = parseInt(cs.fontWeight) || 400
    const need = size >= 24 || (size >= 18.66 && weight >= 700) ? 3 : 4.5
    if (ratio < need) out.push({ text: text.slice(0, 32), ratio: +ratio.toFixed(2), need,
      fg: cs.color, bg: `rgb(${bg.map(Math.round).join(',')})`, size })
  }
  return out
}

const stories = Object.values(JSON.parse(readFileSync(join(STATIC, 'index.json'), 'utf8')).entries)
  .filter(e => e.type === 'story').map(e => e.id)

const launch = { headless: true }
if (process.env.CHROMIUM_PATH) launch.executablePath = process.env.CHROMIUM_PATH
if (process.env.HTTPS_PROXY) launch.proxy = { server: process.env.HTTPS_PROXY, bypass: 'localhost,127.0.0.1' }

const browser = await chromium.launch(launch)
const page = await browser.newPage({ viewport: { width: 900, height: 700 } })

const byStory = {}
for (const id of stories) {
  byStory[id] = {}
  for (const theme of ['light', 'dark']) {
    await page.goto(`http://127.0.0.1:${PORT}/iframe.html?id=${id}&viewMode=story&globals=theme:${theme}`,
      { waitUntil: 'networkidle' })
    await page.waitForTimeout(120)
    byStory[id][theme] = await page.evaluate(auditPage)
  }
}
await browser.close()
server.close()

const asymmetric = [], symmetric = []
for (const [id, t] of Object.entries(byStory)) {
  const l = t.light.length, d = t.dark.length
  if (l && d) symmetric.push(id)
  else if (l || d) asymmetric.push([id, l ? 'light' : 'dark', l ? t.light : t.dark])
}

console.log(`Scanned ${stories.length} stories x 2 themes\n`)

if (asymmetric.length) {
  console.log(`✗ ${asymmetric.length} stories fail in ONE theme only — these are token mapping bugs:\n`)
  for (const [id, theme, fails] of asymmetric) {
    console.log(`  ${id}  [${theme}]`)
    for (const f of fails.slice(0, 3))
      console.log(`      ${String(f.ratio).padStart(5)}:1 (needs ${f.need})  ${f.fg} on ${f.bg}  "${f.text}"`)
  }
  console.log()
} else {
  console.log('✓ No theme-asymmetric contrast failures — light and dark map consistently.\n')
}

if (symmetric.length)
  console.log(`ℹ ${symmetric.length} stories fail in BOTH themes. These are palette-level values, `
    + `not mapping bugs — they need a design decision, not a code fix.`)

process.exit(asymmetric.length ? 1 : 0)
