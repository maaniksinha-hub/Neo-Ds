import './Charts.css';

export interface ChartTooltipRow {
  label: string;
  value: string;
}

export interface ChartTooltipProps {
  rows: ChartTooltipRow[];
  className?: string;
}

export function ChartTooltip({ rows, className }: ChartTooltipProps) {
  return (
    <div className={['ds-charttooltip', className].filter(Boolean).join(' ')} role="tooltip">
      {rows.map((row) => (
        <div key={row.label} className="ds-charttooltip__row">
          <span className="ds-charttooltip__label">{row.label}</span>
          <span className="ds-charttooltip__value">{row.value}</span>
        </div>
      ))}
    </div>
  );
}
