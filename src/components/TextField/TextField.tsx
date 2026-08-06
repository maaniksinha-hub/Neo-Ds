import { useId, type InputHTMLAttributes, type ReactNode } from 'react';
import './TextField.css';

export type TextFieldSize = '48px' | '56px';
export type TextFieldStatus = 'default' | 'error' | 'success';

export interface TextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  size?: TextFieldSize;
  status?: TextFieldStatus;
  supportingText?: string;
  trailingIcon?: ReactNode;
}

export function TextField({
  label,
  size = '56px',
  status = 'default',
  supportingText,
  trailingIcon,
  disabled,
  className,
  id,
  ...rest
}: TextFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  const wrapperClasses = [
    'ds-textfield',
    `ds-textfield--${size}`,
    `ds-textfield--${status}`,
    disabled && 'ds-textfield--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      <div className="ds-textfield__control">
        <input id={inputId} className="ds-textfield__input" placeholder=" " disabled={disabled} {...rest} />
        <label htmlFor={inputId} className="ds-textfield__label">
          {label}
        </label>
        {trailingIcon && <span className="ds-textfield__icon">{trailingIcon}</span>}
      </div>
      {supportingText && <p className="ds-textfield__supporting">{supportingText}</p>}
    </div>
  );
}
