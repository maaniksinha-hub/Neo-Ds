import { buildPath } from './LineChart';
import './Charts.css';

export interface MultiLineChartSeries {
  values: number[];
  color: string;
  dashed?: boolean;
  filled?: boolean;
}

export interface MultiLineChartProps {
  series: MultiLineChartSeries[];
  width?: number;
  height?: number;
  className?: string;
}

/**
 * USE: mixed-line-chart, multi-series-chart, comparison-chart
 * WHEN: Displaying multiple data series on a single line chart with different visual treatments (solid, dashed, area fill).
 * PLATFORM: Global
 * INSTEAD-OF: Use single gLinePositive/gLineNegative for one-series charts.
 */
export function MultiLineChart({ series, width = 343, height = 120, className }: MultiLineChartProps) {
  const allValues = series.flatMap((s) => s.values);
  const bounds = { min: Math.min(...allValues), max: Math.max(...allValues) };

  return (
    <svg
      className={['ds-linechart', className].filter(Boolean).join(' ')}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-label="Multi-series line chart"
    >
      {series.map((s, i) => {
        const { line, area } = buildPath(s.values, width, height, bounds);
        return (
          <g key={i}>
            {s.filled && <path d={area} fill={s.color} opacity="0.1" />}
            <path
              d={line}
              fill="none"
              stroke={s.color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray={s.dashed ? '4 3' : undefined}
            />
          </g>
        );
      })}
    </svg>
  );
}
