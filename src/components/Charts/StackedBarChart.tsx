import './Charts.css';

export interface StackedBarSegment {
  label: string;
  value: number;
  color: string;
}

export interface StackedBarChartProps {
  segments: StackedBarSegment[];
  height?: number;
  className?: string;
}

/**
 * Figma: gBaseHorizontalStackedBarChart
 * USE: stacked-bar-base, horizontal-bar-segment
 * WHEN: Individual segment within a horizontal stacked bar chart. Building block for gHorizontalStackedBarChart.
 * PLATFORM: Global
 *
 * Figma: gHorizontalStackedBarChart
 * USE: horizontal-stacked-bar, composition-bar, proportional-bar
 * WHEN: Showing proportional composition — portfolio allocation, sector distribution, category breakdown.
 * PLATFORM: Global
 * INSTEAD-OF: Use gBaseGroupedVerticalBars for comparing absolute values across categories.
 */
export function StackedBarChart({ segments, height = 8, className }: StackedBarChartProps) {
  const total = segments.reduce((sum, s) => sum + s.value, 0) || 1;

  return (
    <div className={['ds-stackedbar', className].filter(Boolean).join(' ')} style={{ height }}>
      {segments.map((segment) => (
        <span
          key={segment.label}
          className="ds-stackedbar__segment"
          style={{ width: `${(segment.value / total) * 100}%`, background: segment.color }}
          title={`${segment.label}: ${segment.value}`}
        />
      ))}
    </div>
  );
}
