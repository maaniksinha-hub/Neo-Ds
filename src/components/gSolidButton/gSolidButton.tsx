import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './gSolidButton.css';

export type GSolidButtonVariant = 'solid' | 'outline' | 'text';
export type GSolidButtonType = 'primary' | 'positive' | 'negative' | 'sell-cta';
export type GSolidButtonSize = '32px' | '36px' | '44px' | '52px';

export interface GSolidButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Visual style — filled, outlined, or text-only */
  variant?: GSolidButtonVariant;
  /** Semantic intent — drives the color scale */
  type?: GSolidButtonType;
  /** Component height, matches the Figma size scale */
  size?: GSolidButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export function GSolidButton({
  variant = 'solid',
  type = 'primary',
  size = '44px',
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: GSolidButtonProps) {
  const classes = ['ds-button', `ds-button--${variant}`, `ds-button--${type}`, `ds-button--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...rest}>
      {leftIcon && <span className="ds-button__icon">{leftIcon}</span>}
      <span className="ds-button__label">{children}</span>
      {rightIcon && <span className="ds-button__icon">{rightIcon}</span>}
    </button>
  );
}
