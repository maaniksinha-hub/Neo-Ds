import './Charts.css';

export type GridlinesDensity = 'sparse' | 'medium' | 'dense';

export interface GridlinesProps {
  density?: GridlinesDensity;
  width?: number;
  height?: number;
  className?: string;
}

const LINE_COUNT: Record<GridlinesDensity, number> = { sparse: 3, medium: 5, dense: 8 };

/**
 * USE: chart-gridlines, chart-grid, axis-gridlines
 * WHEN: Background gridlines for charts — horizontal lines that help read values off the Y-axis.
 * PLATFORM: Global
 * VARIANTS: Density (sparse/medium/dense).
 */
export function Gridlines({ density = 'medium', width = 343, height = 160, className }: GridlinesProps) {
  const count = LINE_COUNT[density];
  const lines = Array.from({ length: count }, (_, i) => (height / (count - 1)) * i);

  return (
    <svg className={['ds-gridlines', className].filter(Boolean).join(' ')} viewBox={`0 0 ${width} ${height}`} width={width} height={height} aria-hidden="true">
      {lines.map((y) => (
        <line key={y} x1={0} y1={y} x2={width} y2={y} stroke="var(--stroke-default-primary-low)" strokeWidth="1" />
      ))}
    </svg>
  );
}
