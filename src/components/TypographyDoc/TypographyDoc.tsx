import './TypographyDoc.css';

interface FontFamilyToken {
  name: string;
  cssVar: string;
  description: string;
}

const fontFamilies: FontFamilyToken[] = [
  { name: 'Heading', cssVar: '--font-heading', description: 'Bind to heading text layers for consistent typeface across the system.' },
  { name: 'Body', cssVar: '--font-body', description: 'Bind to paragraph and description text layers.' },
  { name: 'Hero Text', cssVar: '--font-hero-text', description: 'Use for large promotional headlines and splash screens.' },
];

interface TypeScaleStep {
  size: string;
  weight: number;
  label: string;
}

// Reflects the sizes/weights actually in use across implemented components (Figma has no separate type-scale
// variable collection beyond the three font-family tokens above — this is the de facto scale, not a Figma token).
const typeScale: TypeScaleStep[] = [
  { size: '24px', weight: 600, label: 'Display / section title' },
  { size: '20px', weight: 600, label: 'Card title' },
  { size: '16px', weight: 500, label: 'Modal / sheet title' },
  { size: '15px', weight: 500, label: 'Large scrip name' },
  { size: '14px', weight: 500, label: 'Body emphasis, list titles' },
  { size: '14px', weight: 400, label: 'Body' },
  { size: '13px', weight: 500, label: 'Secondary emphasis' },
  { size: '13px', weight: 400, label: 'Secondary body' },
  { size: '12px', weight: 500, label: 'Caption emphasis, values' },
  { size: '12px', weight: 400, label: 'Caption' },
  { size: '11px', weight: 500, label: 'Micro label, badges' },
];

export function TypographyDoc() {
  return (
    <div className="ds-typography-doc">
      <section className="ds-typography-doc__section">
        <h3 className="ds-typography-doc__heading">Font families</h3>
        <div className="ds-typography-doc__families">
          {fontFamilies.map((f) => (
            <div key={f.cssVar} className="ds-typography-doc__family">
              <p className="ds-typography-doc__familysample" style={{ fontFamily: `var(${f.cssVar})` }}>
                Aa Bb Cc 123
              </p>
              <div className="ds-typography-doc__meta">
                <span className="ds-typography-doc__name">{f.name}</span>
                <span className="ds-typography-doc__var">{f.cssVar}</span>
                <span className="ds-typography-doc__description">{f.description}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ds-typography-doc__section">
        <h3 className="ds-typography-doc__heading">Type scale in use</h3>
        <p className="ds-typography-doc__note">
          Figma's Typography variable collection only defines the three font families above — there's no separate
          size/weight scale token set. This table reflects the sizes and weights actually used across implemented
          components, for reference and consistency.
        </p>
        <div className="ds-typography-doc__scale">
          {typeScale.map((step, i) => (
            <div key={i} className="ds-typography-doc__step">
              <span className="ds-typography-doc__stepsample" style={{ fontSize: step.size, fontWeight: step.weight }}>
                The quick brown fox
              </span>
              <span className="ds-typography-doc__steplabel">
                {step.size} / {step.weight} — {step.label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
