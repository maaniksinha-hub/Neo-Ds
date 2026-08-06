import type { ReactNode } from 'react';
import './ScripIcon.css';

export type ScripIconSize = 'small' | 'medium' | 'large';

export interface ScripIconProps {
  logo: ReactNode;
  exchange?: string;
  size?: ScripIconSize;
  className?: string;
}

export function ScripIcon({ logo, exchange, size = 'medium', className }: ScripIconProps) {
  const classes = ['ds-scripicon', `ds-scripicon--${size}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      <span className="ds-scripicon__logo">{logo}</span>
      {exchange && <span className="ds-scripicon__badge">{exchange}</span>}
    </span>
  );
}
