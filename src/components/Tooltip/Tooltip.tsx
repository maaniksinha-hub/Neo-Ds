import type { ReactNode } from 'react';
import './Tooltip.css';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right' | 'none';

export interface TooltipProps {
  children: ReactNode;
  position?: TooltipPosition;
  className?: string;
}

export function Tooltip({ children, position = 'bottom', className }: TooltipProps) {
  const classes = ['ds-tooltip', `ds-tooltip--${position}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} role="tooltip">
      {position !== 'none' && <span className="ds-tooltip__arrow" />}
      <span className="ds-tooltip__text">{children}</span>
    </div>
  );
}
