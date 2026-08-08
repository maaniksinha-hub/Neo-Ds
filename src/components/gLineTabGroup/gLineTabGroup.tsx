import './gLineTabGroup.css';

export interface TabItem {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface GLineTabGroupProps {
  items: TabItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function GLineTabGroup({ items, value, onChange, className }: GLineTabGroupProps) {
  return (
    <div className={['ds-tabs', className].filter(Boolean).join(' ')} role="tablist">
      {items.map((item) => {
        const selected = item.value === value;
        const classes = ['ds-tab', selected && 'ds-tab--selected', item.disabled && 'ds-tab--disabled']
          .filter(Boolean)
          .join(' ');
        return (
          <button
            key={item.value}
            type="button"
            role="tab"
            aria-selected={selected}
            disabled={item.disabled}
            className={classes}
            onClick={() => onChange(item.value)}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
