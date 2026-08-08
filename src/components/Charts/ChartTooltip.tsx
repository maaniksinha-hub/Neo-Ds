import './Charts.css';

export interface ChartTooltipRow {
  label: string;
  value: string;
}

export interface ChartTooltipProps {
  rows: ChartTooltipRow[];
  className?: string;
}

/**
 * USE: chart-tooltip, data-tooltip, hover-tooltip, price-tooltip
 * WHEN: Showing data values on hover/touch over chart elements — price at point, volume, OHLC data.
 * PLATFORM: Global
 * VARIANTS: Content type (single value/multi-line/OHLC), with/without crosshair.
 * INSTEAD-OF: Use gTooltip for general UI tooltips not tied to charts.
 */
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
