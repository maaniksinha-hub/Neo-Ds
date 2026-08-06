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
