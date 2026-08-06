import './Charts.css';

export interface AxisLabelsProps {
  labels: string[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

export function AxisLabels({ labels, orientation = 'horizontal', className }: AxisLabelsProps) {
  const classes = ['ds-axislabels', `ds-axislabels--${orientation}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      {labels.map((label, i) => (
        <span key={i} className="ds-axislabels__label">
          {label}
        </span>
      ))}
    </div>
  );
}
