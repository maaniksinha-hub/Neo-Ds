import { colorTokens } from './tokens.generated';
import './ColorsDoc.css';

/**
 * INTERNAL: Storybook-only documentation page (Foundations/Colors). Renders every semantic color token as a live swatch. Not a Figma component — not for use in product screens.
 */
/**
 * USE: color-reference, token-reference, palette
 * WHEN: INTERNAL documentation page. Read it to find the right semantic color token before styling anything — it renders every fill/text/icon/stroke token in the system with its resolved value.
 * PLATFORM: Global (documentation only — never compose this into a product screen)
 * INSTEAD-OF: This page is the source of truth for *which* token to use. Never hardcode a hex value found here; reference the token name instead, so light and dark themes both resolve correctly.
 */
export function ColorsDoc() {
  const categories = Array.from(new Set(colorTokens.map((t) => t.category)));

  return (
    <div className="ds-colors-doc">
      {categories.map((category) => (
        <section key={category} className="ds-colors-doc__section">
          <h3 className="ds-colors-doc__heading">{category}</h3>
          <div className="ds-colors-doc__grid">
            {colorTokens
              .filter((t) => t.category === category)
              .map((t) => (
                <div key={t.cssVar} className="ds-colors-doc__swatch">
                  <div className="ds-colors-doc__color" style={{ background: `var(${t.cssVar})` }} />
                  <div className="ds-colors-doc__meta">
                    <span className="ds-colors-doc__name">{t.name}</span>
                    <span className="ds-colors-doc__var">{t.cssVar}</span>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
