import type { ReactNode } from 'react';
import './wTopNav.css';

export interface WTopNavLink {
  key: string;
  label: string;
  active?: boolean;
}

export interface WTopNavProps {
  logo: ReactNode;
  links?: WTopNavLink[];
  onLinkClick?: (key: string) => void;
  search?: ReactNode;
  marketStrip?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function WTopNav({ logo, links, onLinkClick, search, marketStrip, actions, className }: WTopNavProps) {
  return (
    <header className={['ds-topnav', className].filter(Boolean).join(' ')}>
      <div className="ds-topnav__row">
        <div className="ds-topnav__logo">{logo}</div>
        {links && links.length > 0 && (
          <nav className="ds-topnav__links">
            {links.map((link) => (
              <button
                key={link.key}
                type="button"
                className={['ds-topnav__link', link.active && 'ds-topnav__link--active'].filter(Boolean).join(' ')}
                onClick={() => onLinkClick?.(link.key)}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
        {search && <div className="ds-topnav__search">{search}</div>}
        {actions && <div className="ds-topnav__actions">{actions}</div>}
      </div>
      {marketStrip && <div className="ds-topnav__marketstrip">{marketStrip}</div>}
    </header>
  );
}
