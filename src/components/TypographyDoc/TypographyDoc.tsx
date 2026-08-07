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

interface TypeStyle {
  token: string;
  font: 'Inter' | 'Crimson Pro';
  size: number;
  weight: 400 | 500 | 600;
  italic?: boolean;
  lineHeightPercent: number;
  lineHeightPx: number;
  webOnly?: boolean;
  mobileUsecase?: string;
  webUsecase?: string;
}

interface TypeCategory {
  name: string;
  styles: TypeStyle[];
}

// Transcribed from the Figma "Typography" typescale (WIP Design System, node 11105:24325) — the source of truth
// for the full scale, distinct from the Typography *variable* collection which only defines the 3 font-family
// tokens above. Every size/weight/line-height/use-case here matches that page.
const categories: TypeCategory[] = [
  {
    name: 'Display',
    styles: [
      { token: 'D1', font: 'Inter', size: 64, weight: 500, lineHeightPercent: 112, lineHeightPx: 72, webOnly: true },
      { token: 'D2', font: 'Inter', size: 56, weight: 500, lineHeightPercent: 114, lineHeightPx: 64, webOnly: true },
      { token: 'D3', font: 'Inter', size: 48, weight: 500, lineHeightPercent: 116, lineHeightPx: 56, webOnly: true },
      { token: 'D4', font: 'Inter', size: 40, weight: 500, lineHeightPercent: 120, lineHeightPx: 48, webOnly: true },
      { token: 'D5', font: 'Inter', size: 32, weight: 500, lineHeightPercent: 125, lineHeightPx: 40 },
      { token: 'D6', font: 'Inter', size: 18, weight: 500, lineHeightPercent: 133, lineHeightPx: 24, mobileUsecase: 'Display text for highlighted text/number within a card or a section' },
      { token: 'D7', font: 'Inter', size: 16, weight: 500, lineHeightPercent: 150, lineHeightPx: 24, webUsecase: 'Scrip: Dividend, Technicals card' },
    ],
  },
  {
    name: 'Highlight',
    styles: [
      { token: 'Highlight D1', font: 'Crimson Pro', size: 64, weight: 400, lineHeightPercent: 112, lineHeightPx: 72, webOnly: true },
      { token: 'Highlight D2', font: 'Crimson Pro', size: 56, weight: 400, lineHeightPercent: 114, lineHeightPx: 64, webOnly: true },
      { token: 'Highlight D3', font: 'Crimson Pro', size: 48, weight: 400, lineHeightPercent: 116, lineHeightPx: 56, webOnly: true },
      { token: 'Highlight D4', font: 'Crimson Pro', size: 40, weight: 400, lineHeightPercent: 120, lineHeightPx: 48, mobileUsecase: 'Highlighted text/number (e.g. LTP on scrip page)' },
      { token: 'Highlight D5', font: 'Crimson Pro', size: 32, weight: 500, lineHeightPercent: 125, lineHeightPx: 40, mobileUsecase: 'Feature section heading, Scrip LTP' },
      { token: 'Highlight D6 Italic', font: 'Crimson Pro', size: 28, weight: 600, italic: true, lineHeightPercent: 128, lineHeightPx: 36, mobileUsecase: 'Pull quote, editorial callout, highlighted text in headings' },
      { token: 'Highlight D7', font: 'Crimson Pro', size: 24, weight: 400, lineHeightPercent: 133, lineHeightPx: 32, mobileUsecase: 'Subheading, blog post section title', webUsecase: 'Scrip LTP decimal' },
      { token: 'Highlight D7 Italic', font: 'Crimson Pro', size: 24, weight: 600, italic: true, lineHeightPercent: 133, lineHeightPx: 32, mobileUsecase: 'Highlighted text in headings', webUsecase: 'Section title special' },
      { token: 'Highlight D8', font: 'Crimson Pro', size: 20, weight: 400, lineHeightPercent: 140, lineHeightPx: 28, mobileUsecase: 'Card title in editorial layouts', webUsecase: 'Basket card' },
      { token: 'Highlight D8 Italic', font: 'Crimson Pro', size: 20, weight: 600, italic: true, lineHeightPercent: 140, lineHeightPx: 28, webUsecase: 'Special/Empty status' },
      { token: 'Highlight D9', font: 'Crimson Pro', size: 16, weight: 400, lineHeightPercent: 150, lineHeightPx: 24, mobileUsecase: 'Caption, footnote in serif context', webUsecase: 'Basket card decimal' },
    ],
  },
  {
    name: 'Heading',
    styles: [
      { token: 'Default', font: 'Inter', size: 20, weight: 600, lineHeightPercent: 140, lineHeightPx: 28, mobileUsecase: 'Page title', webUsecase: 'Page title' },
      { token: 'Medium', font: 'Inter', size: 24, weight: 600, lineHeightPercent: 133, lineHeightPx: 32 },
      { token: 'Large', font: 'Inter', size: 28, weight: 600, lineHeightPercent: 128, lineHeightPx: 36 },
    ],
  },
  {
    name: 'Title',
    styles: [
      { token: 'Default', font: 'Inter', size: 16, weight: 500, lineHeightPercent: 150, lineHeightPx: 24, mobileUsecase: 'Card title, Sidebar section label', webUsecase: 'Section title, Current value' },
      { token: 'Small', font: 'Inter', size: 14, weight: 600, lineHeightPercent: 142, lineHeightPx: 20, mobileUsecase: 'Table column header, List group title', webUsecase: 'Selected tab' },
      { token: 'Small Low Emphasis', font: 'Inter', size: 14, weight: 500, lineHeightPercent: 142, lineHeightPx: 20, mobileUsecase: 'Panel title, Tooltip header, Small titles for sections', webUsecase: 'Sub-section title (smallest title — used within card or standalone)' },
      { token: 'Large', font: 'Inter', size: 18, weight: 500, lineHeightPercent: 133, lineHeightPx: 24, mobileUsecase: 'Section headings', webUsecase: 'L2 page title' },
    ],
  },
  {
    name: 'Body',
    styles: [
      { token: 'Default', font: 'Inter', size: 14, weight: 400, lineHeightPercent: 142, lineHeightPx: 20, mobileUsecase: 'Primary UI body text', webUsecase: 'Primary body text, Sidebar label default, List' },
      { token: 'Default High Emphasis', font: 'Inter', size: 14, weight: 500, lineHeightPercent: 142, lineHeightPx: 20, mobileUsecase: 'Emphasized body text, Inline link label', webUsecase: 'Sidebar label selected, Card content, Banner title, Values, Emphasized body text, Default tab' },
      { token: 'Small', font: 'Inter', size: 12, weight: 400, lineHeightPercent: 133, lineHeightPx: 16, mobileUsecase: 'Supporting detail, Secondary description', webUsecase: 'Trailing decimals & percentage, Note and Insights' },
      { token: 'Small High Emphasis', font: 'Inter', size: 12, weight: 600, lineHeightPercent: 133, lineHeightPx: 16, mobileUsecase: 'Emphasized supporting detail, Secondary description', webUsecase: 'Dashboard tile status' },
      { token: 'Large', font: 'Inter', size: 16, weight: 400, lineHeightPercent: 150, lineHeightPx: 24, mobileUsecase: 'Intro paragraph, description, text fields etc.', webUsecase: 'Text field' },
    ],
  },
  {
    name: 'Caption',
    styles: [
      { token: 'Default Low Emphasis', font: 'Inter', size: 12, weight: 400, lineHeightPercent: 133, lineHeightPx: 16, mobileUsecase: 'Caption, helper text below inputs', webUsecase: 'Label, top nav index, nudge, market depth' },
      { token: 'Default', font: 'Inter', size: 12, weight: 500, lineHeightPercent: 133, lineHeightPx: 16, mobileUsecase: 'Metadata label, timestamp', webUsecase: 'Metadata (supporting, helper, timestamp), % chg text, price change text, chip label, badge, market depth' },
      { token: 'Default High Emphasis', font: 'Inter', size: 12, weight: 600, lineHeightPercent: 133, lineHeightPx: 16, mobileUsecase: 'Tags, small badges', webUsecase: '% chg badge, price change badge' },
      { token: 'Small', font: 'Inter', size: 10, weight: 600, lineHeightPercent: 160, lineHeightPx: 16, mobileUsecase: 'Chip label, compact badge, nav pill', webUsecase: 'LTP indicator label' },
    ],
  },
];

const fontVar: Record<TypeStyle['font'], string> = {
  Inter: 'var(--font-body)',
  'Crimson Pro': 'var(--font-hero-text)',
};

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

      {categories.map((category) => (
        <section key={category.name} className="ds-typography-doc__section">
          <h3 className="ds-typography-doc__heading">{category.name}</h3>
          <div className="ds-typography-doc__table">
            <div className="ds-typography-doc__row ds-typography-doc__row--head">
              <span>Token</span>
              <span>Sample</span>
              <span>Font size</span>
              <span>Weight</span>
              <span>Line height</span>
              <span>Use case</span>
            </div>
            {category.styles.map((s) => (
              <div key={s.token} className="ds-typography-doc__row">
                <span className="ds-typography-doc__token">
                  {s.token}
                  {s.webOnly && <span className="ds-typography-doc__badge">Web only</span>}
                </span>
                <span
                  className="ds-typography-doc__sample"
                  style={{
                    fontFamily: fontVar[s.font],
                    fontSize: s.size,
                    fontWeight: s.weight,
                    fontStyle: s.italic ? 'italic' : 'normal',
                  }}
                >
                  Ag
                </span>
                <span className="ds-typography-doc__cell">{s.size}px</span>
                <span className="ds-typography-doc__cell">{s.weight}{s.italic ? ' italic' : ''}</span>
                <span className="ds-typography-doc__cell">
                  {s.lineHeightPercent}% / {s.lineHeightPx}px
                </span>
                <span className="ds-typography-doc__cell ds-typography-doc__usecase">
                  {s.mobileUsecase && <span>Mobile: {s.mobileUsecase}</span>}
                  {s.webUsecase && <span>Web: {s.webUsecase}</span>}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
