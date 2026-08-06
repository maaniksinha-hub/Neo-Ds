import type { ReactNode } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'none';
export type TooltipEmphasis = 'default' | 'low';

export interface TooltipProps {
  children: ReactNode;
  position?: TooltipPosition;
  emphasis?: TooltipEmphasis;
  className?: string;
}

export function Tooltip({ children, position = 'bottom', emphasis = 'default', className }: TooltipProps) {
  const classes = ['ds-tooltip', `ds-tooltip--${position}`, `ds-tooltip--emphasis-${emphasis}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} role="tooltip">
      {position !== 'none' && <span className="ds-tooltip__arrow" />}
      <span className="ds-tooltip__text">{children}</span>
    </div>
  );
}
