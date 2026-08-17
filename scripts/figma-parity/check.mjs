#!/usr/bin/env node
/**
 * Figma parity check for "Ready for Dev" components.
 *
 * Proves — mechanically, not by eye — that every design token consumed by the
 * Figma pages published as Ready for Dev resolves in this codebase to exactly
 * the value Figma holds.
 *
 * How the mapping works: each declaration in `src/tokens/` is preceded by a
 * comment whose first segment is the *exact* Figma variable name, e.g.
 *
 *     /* Fill/Accent1/Primary — Primary brand color fill. ... *\/
 *     --fill-accent1-primary: var(--color-blue-700);
 *
 * That comment is the join key. The script resolves each token's var() chain
 * down to a literal, normalises it, and diffs it against the Figma fixture in
 * `figma-ready-for-dev.json`.
 *
 * Exit code 0 = parity, 1 = drift.
 *
 * Usage: node scripts/figma-parity/check.mjs [--platform web|mobile] [--json]
 */

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const TOKEN_FILES = ['primitives.css', 'semantic.css', 'numeric.css', 'typography.css'];

const args = process.argv.slice(2);
const platform = args.includes('--platform') ? args[args.indexOf('--platform') + 1] : 'web';
const asJson = args.includes('--json');

/* ------------------------------------------------------------------ parsing */

/**
 * Parse a token CSS file into { selector -> { cssVar -> rawValue } } plus a
 * { figmaName -> cssVar } index built from the preceding comment.
 */
function parseTokens() {
  /** @type {Record<string, Record<string, string>>} */
  const scopes = {};
  /** @type {Record<string, string>} */
  const figmaIndex = {};

  for (const file of TOKEN_FILES) {
    const css = readFileSync(resolve(ROOT, 'src/tokens', file), 'utf8');
    // Split into top-level blocks: `selector { ... }`
    const blockRe = /([^{}]+)\{([^{}]*)\}/g;
    let block;
    while ((block = blockRe.exec(css))) {
      const selector = block[1].trim();
      const body = block[2];
      scopes[selector] ??= {};

      // Walk declarations, remembering the most recent comment.
      const declRe = /\/\*([\s\S]*?)\*\/|(--[\w-]+)\s*:\s*([^;]+);/g;
      let pendingComment = null;
      let m;
      while ((m = declRe.exec(body))) {
        if (m[1] !== undefined) {
          pendingComment = m[1].trim();
          continue;
        }
        const [, , name, value] = m;
        scopes[selector][name] = value.trim();

        // The Figma name is everything before the first em dash in the comment.
        if (pendingComment) {
          const figmaName = pendingComment.split('—')[0].trim();
          if (figmaName && !figmaName.includes(' — ')) {
            // Only the canonical (light / default) definition owns the mapping.
            if (!(figmaName in figmaIndex)) figmaIndex[figmaName] = name;
          }
        }
        pendingComment = null;
      }
    }
  }
  return { scopes, figmaIndex };
}

/* --------------------------------------------------------------- resolution */

/**
 * Resolve a token to a literal value under a given cascade (ordered list of
 * selectors, most specific last).
 */
function resolve_(name, scopes, cascade, seen = new Set()) {
  if (seen.has(name)) return { error: `circular reference at ${name}` };
  seen.add(name);

  let raw;
  for (const sel of cascade) {
    if (scopes[sel] && name in scopes[sel]) raw = scopes[sel][name];
  }
  if (raw === undefined) return { error: `undefined token ${name}` };

  const varMatch = raw.match(/^var\(\s*(--[\w-]+)\s*(?:,([^)]*))?\)$/);
  if (varMatch) {
    const inner = resolve_(varMatch[1], scopes, cascade, seen);
    if (inner.error && varMatch[2] !== undefined) {
      return { value: varMatch[2].trim(), viaFallback: true };
    }
    return inner;
  }
  return { value: raw };
}

/* ------------------------------------------------------------ normalisation */

function toHex(value) {
  const v = value.trim().toLowerCase();

  const rgba = v.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*(?:,\s*([\d.]+)\s*)?\)$/);
  if (rgba) {
    const [r, g, b] = [rgba[1], rgba[2], rgba[3]].map((n) => Math.round(parseFloat(n)));
    const a = rgba[4] === undefined ? 1 : parseFloat(rgba[4]);
    const hex = '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');
    if (a >= 1) return hex;
    return hex + Math.round(a * 255).toString(16).padStart(2, '0');
  }

  if (/^#[0-9a-f]{3}$/.test(v)) return '#' + [...v.slice(1)].map((c) => c + c).join('');
  if (/^#[0-9a-f]{6}$/.test(v)) return v;
  if (/^#[0-9a-f]{8}$/.test(v)) {
    // Drop a fully-opaque alpha channel so #rrggbbff === #rrggbb.
    return v.endsWith('ff') ? v.slice(0, 7) : v;
  }
  return v;
}

/** Figma reports colors as #rrggbb or #rrggbbaa, and numerics as bare strings. */
function normaliseFigma(value) {
  if (value.startsWith('#')) return toHex(value);
  return value; // numeric, e.g. "16"
}

/** Our numerics carry a `px` unit; Figma's don't. */
function normaliseOurs(value) {
  const px = value.match(/^(-?[\d.]+)px$/);
  if (px) return px[1];
  if (value.startsWith('#') || value.startsWith('rgb')) return toHex(value);
  return value;
}

/* -------------------------------------------------------------------- check */

const fixture = JSON.parse(readFileSync(resolve(HERE, 'figma-ready-for-dev.json'), 'utf8'));
const { scopes, figmaIndex } = parseTokens();

const cascade = platform === 'mobile' ? [':root', ':root[data-platform="mobile"]'] : [':root'];

const results = [];
for (const [pageName, page] of Object.entries(fixture.pages)) {
  for (const [figmaName, figmaValue] of Object.entries(page.vars)) {
    const cssVar = figmaIndex[figmaName];
    if (!cssVar) {
      results.push({ page: pageName, figmaName, status: 'UNMAPPED', figma: figmaValue, ours: null });
      continue;
    }
    const r = resolve_(cssVar, scopes, cascade);
    if (r.error) {
      results.push({ page: pageName, figmaName, cssVar, status: 'UNRESOLVED', figma: figmaValue, ours: r.error });
      continue;
    }
    const ours = normaliseOurs(r.value);
    const theirs = normaliseFigma(figmaValue);
    results.push({
      page: pageName,
      figmaName,
      cssVar,
      status: ours === theirs ? 'MATCH' : 'DRIFT',
      figma: theirs,
      ours,
      viaFallback: r.viaFallback ?? false,
    });
  }
}

const drift = results.filter((r) => r.status !== 'MATCH');
const byStatus = (s) => results.filter((r) => r.status === s);

if (asJson) {
  console.log(JSON.stringify({ platform, results }, null, 2));
} else {
  const pad = (s, n) => String(s).padEnd(n);
  console.log(`\nFigma parity — Ready for Dev pages — platform: ${platform}\n`);

  // De-duplicate: the same variable appears on several pages.
  const seen = new Map();
  for (const r of results) {
    const key = r.figmaName;
    if (!seen.has(key) || (seen.get(key).status === 'MATCH' && r.status !== 'MATCH')) seen.set(key, r);
  }
  const unique = [...seen.values()];
  const uniqueDrift = unique.filter((r) => r.status !== 'MATCH');

  if (uniqueDrift.length) {
    console.log('DRIFT / UNMAPPED\n');
    console.log(`  ${pad('Figma variable', 40)} ${pad('css token', 38)} ${pad('figma', 12)} ours`);
    console.log(`  ${'-'.repeat(40)} ${'-'.repeat(38)} ${'-'.repeat(12)} ${'-'.repeat(12)}`);
    for (const r of uniqueDrift) {
      console.log(
        `  ${pad(r.figmaName, 40)} ${pad(r.cssVar ?? '(none)', 38)} ${pad(r.figma, 12)} ${r.ours ?? '(unmapped)'}`
      );
    }
    console.log('');
  }

  console.log(
    `  ${unique.length} distinct Figma variables checked across ${Object.keys(fixture.pages).length} Ready-for-Dev pages`
  );
  console.log(`  match:      ${unique.filter((r) => r.status === 'MATCH').length}`);
  console.log(`  drift:      ${unique.filter((r) => r.status === 'DRIFT').length}`);
  console.log(`  unmapped:   ${unique.filter((r) => r.status === 'UNMAPPED').length}`);
  console.log(`  unresolved: ${unique.filter((r) => r.status === 'UNRESOLVED').length}\n`);
}

process.exit(drift.length ? 1 : 0);
