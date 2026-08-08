import type { ReactNode } from 'react';
import './gBadge.css';

export type GBadgeColor = 'neutral' | 'negative' | 'positive' | 'highlight' | 'brand' | 'warning' | 'orange';
export type GBadgeSize = 'small' | 'standard' | 'small-caps';
export type GBadgeStyle = 'filled' | 'outline';

export interface GBadgeProps {
  color?: GBadgeColor;
  size?: GBadgeSize;
  variant?: GBadgeStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function GBadge({
  color = 'neutral',
  size = 'standard',
  variant = 'filled',
  leftIcon,
  rightIcon,
  children,
  className,
}: GBadgeProps) {
  const classes = ['ds-badge', `ds-badge--${variant}`, `ds-badge--${color}`, `ds-badge--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <span className={classes}>
      {leftIcon && <span className="ds-badge__icon">{leftIcon}</span>}
      <span className="ds-badge__label">{children}</span>
      {rightIcon && <span className="ds-badge__icon">{rightIcon}</span>}
    </span>
  );
}
