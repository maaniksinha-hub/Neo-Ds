import type { ReactNode } from 'react';
import './gTooltip.css';

export type GTooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'none';
export type GTooltipEmphasis = 'default' | 'low';

export interface GTooltipProps {
  children: ReactNode;
  position?: GTooltipPosition;
  emphasis?: GTooltipEmphasis;
  className?: string;
}

export function GTooltip({ children, position = 'bottom', emphasis = 'default', className }: GTooltipProps) {
  const classes = ['ds-tooltip', `ds-tooltip--${position}`, `ds-tooltip--emphasis-${emphasis}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} role="tooltip">
      {position !== 'none' && <span className="ds-tooltip__arrow" />}
      <span className="ds-tooltip__text">{children}</span>
    </div>
  );
}
