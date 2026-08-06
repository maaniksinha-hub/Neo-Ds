import './Charts.css';

export type ChartDotColor = 'positive' | 'negative';

export interface ChartDotProps {
  color?: ChartDotColor;
  pulse?: boolean;
  className?: string;
}

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
