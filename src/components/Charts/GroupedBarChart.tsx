import './Charts.css';

export interface GroupedBarSeries {
  value: number;
  color: string;
  selected?: boolean;
}

export interface GroupedBarChartGroup {
  label: string;
  bars: GroupedBarSeries[];
}

export interface GroupedBarChartProps {
  groups: GroupedBarChartGroup[];
  height?: number;
  className?: string;
}

export function GroupedBarChart({ groups, height = 200, className }: GroupedBarChartProps) {
  const max = Math.max(...groups.flatMap((g) => g.bars.map((b) => Math.abs(b.value))), 1);

  return (
    <div className={['ds-groupedbar', className].filter(Boolean).join(' ')} style={{ height }}>
      {groups.map((group) => (
        <div key={group.label} className="ds-groupedbar__group">
          <div className="ds-groupedbar__bars">
            {group.bars.map((bar, i) => (
              <div
                key={i}
                className={['ds-groupedbar__bar', bar.selected && 'ds-groupedbar__bar--selected'].filter(Boolean).join(' ')}
                style={{ height: `${(Math.abs(bar.value) / max) * 100}%`, background: bar.color }}
              />
            ))}
          </div>
          <span className="ds-groupedbar__label">{group.label}</span>
        </div>
      ))}
    </div>
  );
}
