import type { ReactNode } from 'react';
import './mBottomNav.css';

export interface MBottomNavItem {
  value: string;
  label: string;
  icon: ReactNode;
}

export interface MBottomNavProps {
  items: MBottomNavItem[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * USE: bottom-navigation, tab-bar, main-nav
 * WHEN: Primary navigation at bottom of mobile screens. Always present on main app screens.
 * PLATFORM: Mobile
 * VARIANTS: Active tab selection (Home, Search, Portfolio, Orders, More).
 * INSTEAD-OF: Use wSideNav for web navigation.
 */
export function MBottomNav({ items, value, onChange, className }: MBottomNavProps) {
  return (
    <nav className={['ds-bottomnav', className].filter(Boolean).join(' ')}>
      {items.map((item) => {
        const selected = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            className={['ds-bottomnav__tab', selected && 'ds-bottomnav__tab--selected'].filter(Boolean).join(' ')}
            onClick={() => onChange(item.value)}
            aria-current={selected}
          >
            <span className="ds-bottomnav__icon">{item.icon}</span>
            <span className="ds-bottomnav__label">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
