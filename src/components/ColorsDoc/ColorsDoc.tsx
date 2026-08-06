import { colorTokens } from './tokens.generated';
import './ColorsDoc.css';

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
