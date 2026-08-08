import './Charts.css';

export interface AxisLabelsProps {
  labels: string[];
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}

/**
 * USE: axis-labels, chart-axis
 * WHEN: Axis labels for charts. Horizontal orientation (mX-Axis) for dates/time periods/categories;
 * vertical orientation (gY-Axis) for price values/quantities/percentages.
 * PLATFORM: mX-Axis is Mobile, gY-Axis is Global — see the MXAxis/GYAxis exports in ds.tsx.
 */
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
