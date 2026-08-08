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

/**
 * USE: line-tab-bar, underline-tabs, tab-navigation
 * WHEN: Switching between content sections with underline indicator — typically used within page content, not top-level navigation.
 * PLATFORM: Global
 * VARIANTS: Tab count (2/3/4+), with/without scrolling.
 * INSTEAD-OF: Use gPillTabGroup for contained/pill-style tabs.
 */
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
