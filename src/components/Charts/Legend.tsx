import './Charts.css';

export interface LegendItem {
  label: string;
  value?: string;
  color: string;
}

export interface LegendProps {
  items: LegendItem[];
  stacked?: boolean;
  className?: string;
}

/**
 * Figma: gBaseLegend
 * USE: chart-legend-item, legend-entry, data-series-label
 * WHEN: Individual legend entry showing color dot + label for a data series. Building block for gLegendGroup.
 * PLATFORM: Global
 * VARIANTS: Color dot style, with/without value.
 *
 * Figma: gLegendGroup
 * USE: chart-legend, legend-bar, data-legend, series-legend
 * WHEN: Group of legend entries for multi-series charts — typically placed above or below the chart.
 * PLATFORM: Global
 * VARIANTS: Layout (horizontal/vertical), item count.
 */
export function Legend({ items, stacked = false, className }: LegendProps) {
  const classes = ['ds-legend', stacked && 'ds-legend--stacked', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {items.map((item) => (
        <div key={item.label} className="ds-legend__item">
          <span className="ds-legend__dot" style={{ background: item.color }} />
          <span className="ds-legend__label">{item.label}</span>
          {item.value && <span className="ds-legend__value">{item.value}</span>}
        </div>
      ))}
    </div>
  );
}
