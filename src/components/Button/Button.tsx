import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './Button.css';

export type ButtonVariant = 'solid' | 'outline' | 'text';
export type ButtonType = 'primary' | 'positive' | 'negative' | 'sell-cta';
export type ButtonSize = '32px' | '36px' | '44px' | '52px';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** Visual style — filled, outlined, or text-only */
  variant?: ButtonVariant;
  /** Semantic intent — drives the color scale */
  type?: ButtonType;
  /** Component height, matches the Figma size scale */
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export function Button({
  variant = 'solid',
  type = 'primary',
  size = '44px',
  leftIcon,
  rightIcon,
  className,
  children,
  ...rest
}: ButtonProps) {
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
