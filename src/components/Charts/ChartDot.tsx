import './Charts.css';

export type ChartDotColor = 'positive' | 'negative';

export interface ChartDotProps {
  color?: ChartDotColor;
  pulse?: boolean;
  className?: string;
}

/**
 * Figma: gBaseChartIndicator
 * USE: chart-data-point, chart-dot, data-marker
 * WHEN: Data point marker on a chart line — building block used within chart compositions.
 * PLATFORM: Global
 * VARIANTS: Color (positive/negative).
 *
 * Figma: gChartIndicator
 * USE: chart-indicator, current-price-marker, chart-crosshair
 * WHEN: Interactive indicator showing the current/selected price point on a chart with crosshair lines.
 * PLATFORM: Global
 * VARIANTS: Type (dot/crosshair/line), color.
 *
 * Figma: mIndicatorDot
 * USE: chart-dot, data-point-marker, current-value-indicator
 * WHEN: Marking the current or selected data point on a line chart.
 * PLATFORM: Mobile
 */
export function ChartDot({ color = 'positive', pulse = false, className }: ChartDotProps) {
  const classes = ['ds-chartdot', `ds-chartdot--${color}`, pulse && 'ds-chartdot--pulse', className]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={classes}>
      {pulse && <span className="ds-chartdot__ring" />}
      <span className="ds-chartdot__core" />
    </span>
  );
}
