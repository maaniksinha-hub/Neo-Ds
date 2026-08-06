import type { ReactNode } from 'react';
import './Chip.css';

export type ChipVariant = 'choice' | 'action';
export type ChipType = 'default' | 'buy' | 'sell';

export interface ChipProps {
  variant?: ChipVariant;
  type?: ChipType;
  selected?: boolean;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

export function Chip({
  variant = 'choice',
  type = 'default',
  selected = false,
  disabled = false,
  leftIcon,
  rightIcon,
  onClick,
  children,
  className,
}: ChipProps) {
  const classes = [
    'ds-chip',
    `ds-chip--${variant}`,
    `ds-chip--${type}`,
    selected && 'ds-chip--selected',
    disabled && 'ds-chip--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button type="button" className={classes} disabled={disabled} onClick={onClick} aria-pressed={variant === 'choice' ? selected : undefined}>
      {leftIcon && <span className="ds-chip__icon">{leftIcon}</span>}
      <span className="ds-chip__label">{children}</span>
      {rightIcon && <span className="ds-chip__icon">{rightIcon}</span>}
    </button>
  );
}
