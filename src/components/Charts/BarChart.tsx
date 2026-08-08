import './Charts.css';

export interface BarChartBar {
  label: string;
  value: number;
  color?: string;
  selected?: boolean;
}

export interface BarChartProps {
  bars: BarChartBar[];
  height?: number;
  className?: string;
}

/**
 * USE: bar-chart-bar, vertical-bar, column-bar
 * WHEN: Single vertical bar in a bar chart. Building block for grouped and stacked bar charts.
 * PLATFORM: Global
 */
export function BarChart({ bars, height = 200, className }: BarChartProps) {
  const max = Math.max(...bars.map((b) => Math.abs(b.value)), 1);

  return (
    <div className={['ds-barchart', className].filter(Boolean).join(' ')} style={{ height }}>
      {bars.map((bar) => (
        <div key={bar.label} className="ds-barchart__column">
          <div
            className={['ds-barchart__bar', bar.selected && 'ds-barchart__bar--selected'].filter(Boolean).join(' ')}
            style={{
              height: `${(Math.abs(bar.value) / max) * 100}%`,
              background: bar.color ?? 'var(--fill-accent1-primary)',
            }}
          />
          <span className="ds-barchart__label">{bar.label}</span>
        </div>
      ))}
    </div>
  );
}
