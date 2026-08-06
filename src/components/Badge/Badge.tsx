import type { ReactNode } from 'react';
import './Badge.css';

export type BadgeColor = 'neutral' | 'negative' | 'positive' | 'highlight' | 'brand' | 'warning' | 'orange';
export type BadgeSize = 'small' | 'standard' | 'small-caps';
export type BadgeStyle = 'filled' | 'outline';

export interface BadgeProps {
  color?: BadgeColor;
  size?: BadgeSize;
  variant?: BadgeStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Badge({
  color = 'neutral',
  size = 'standard',
  variant = 'filled',
  leftIcon,
  rightIcon,
  children,
  className,
}: BadgeProps) {
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
