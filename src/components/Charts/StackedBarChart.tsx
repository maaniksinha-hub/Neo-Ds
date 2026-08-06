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
