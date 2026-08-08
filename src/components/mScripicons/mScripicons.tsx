import type { ReactNode } from 'react';
import './mScripicons.css';

export type MScripiconsSize = 'small' | 'medium' | 'large';

export interface MScripiconsProps {
  logo: ReactNode;
  exchange?: string;
  size?: MScripiconsSize;
  className?: string;
}

/**
 * USE: stock-icon, instrument-icon, exchange-icon
 * WHEN: Small icon representation of a stock or instrument — used within lists and compact card layouts.
 * PLATFORM: Mobile
 * VARIANTS: With/without exchange badge overlay.
 */
export function MScripicons({ logo, exchange, size = 'medium', className }: MScripiconsProps) {
  const classes = ['ds-scripicon', `ds-scripicon--${size}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      <span className="ds-scripicon__logo">{logo}</span>
      {exchange && <span className="ds-scripicon__badge">{exchange}</span>}
    </span>
  );
}
