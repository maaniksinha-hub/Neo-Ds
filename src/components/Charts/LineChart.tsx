import './Charts.css';

export type LineChartDirection = 'positive' | 'negative';

export interface LineChartProps {
  values: number[];
  direction?: LineChartDirection;
  width?: number;
  height?: number;
  filled?: boolean;
  className?: string;
}

function buildPath(values: number[], width: number, height: number) {
  if (values.length < 2) return { line: '', area: '' };
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = width / (values.length - 1);

  const points = values.map((v, i) => {
    const x = i * stepX;
    const y = height - ((v - min) / range) * height;
    return [x, y];
  });

  const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
  const area = `${line} L${width},${height} L0,${height} Z`;
  return { line, area };
}

export function LineChart({ values, direction = 'positive', width = 343, height = 120, filled = true, className }: LineChartProps) {
  const { line, area } = buildPath(values, width, height);
  const colorVar = direction === 'positive' ? 'var(--fill-positive-primary)' : 'var(--fill-negative-primary)';

  return (
    <svg
      className={['ds-linechart', className].filter(Boolean).join(' ')}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-label="Line chart"
    >
      {filled && <path d={area} fill={colorVar} opacity="0.12" />}
      <path d={line} fill="none" stroke={colorVar} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
