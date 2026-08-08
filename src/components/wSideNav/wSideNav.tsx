import type { ReactNode } from 'react';
import './wSideNav.css';

export interface WSideNavItem {
  key: string;
  label: string;
  icon?: ReactNode;
  badge?: string;
  disabled?: boolean;
}

export interface WSideNavProps {
  items: WSideNavItem[];
  activeKey: string;
  onChange: (key: string) => void;
  collapsed?: boolean;
  className?: string;
}

/**
 * USE: side-navigation, left-nav, web-nav-menu
 * WHEN: Primary navigation on web. Always visible on the left side of the layout.
 * PLATFORM: Web
 * VARIANTS: Expanded/collapsed states, active section highlighting.
 * INSTEAD-OF: Use mBottomNav for mobile navigation.
 */
export function WSideNav({ items, activeKey, onChange, collapsed = false, className }: WSideNavProps) {
  const classes = ['ds-sidenav', collapsed && 'ds-sidenav--collapsed', className].filter(Boolean).join(' ');

  return (
    <nav className={classes}>
      {items.map((item) => {
        const isActive = item.key === activeKey;
        const itemClasses = ['ds-sidenav__item', isActive && 'ds-sidenav__item--active', item.disabled && 'ds-sidenav__item--disabled']
          .filter(Boolean)
          .join(' ');

        return (
          <button
            key={item.key}
            type="button"
            className={itemClasses}
            disabled={item.disabled}
            onClick={() => onChange(item.key)}
            aria-current={isActive ? 'page' : undefined}
          >
            {item.icon && <span className="ds-sidenav__icon">{item.icon}</span>}
            {!collapsed && <span className="ds-sidenav__label">{item.label}</span>}
            {!collapsed && item.badge && <span className="ds-sidenav__badge">{item.badge}</span>}
          </button>
        );
      })}
    </nav>
  );
}
