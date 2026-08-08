import { useId, type InputHTMLAttributes, type ReactNode } from 'react';
import './gTextField.css';

export type GTextFieldSize = '48px' | '56px';
export type GTextFieldStatus = 'default' | 'error' | 'success';

export interface GTextFieldProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label: string;
  size?: GTextFieldSize;
  status?: GTextFieldStatus;
  supportingText?: string;
  trailingIcon?: ReactNode;
}

/**
 * USE: text-input, input-field, form-field, text-box
 * WHEN: User text entry — name, email, search query, or any single-line input.
 * PLATFORM: Global
 * VARIANTS: State (default/focused/filled/error/disabled), with/without label, helper text, leading/trailing icons.
 * INSTEAD-OF: Use gDescription field for multi-line input, mAmountTextField for currency amounts.
 */
export function GTextField({
  label,
  size = '56px',
  status = 'default',
  supportingText,
  trailingIcon,
  disabled,
  className,
  id,
  ...rest
}: GTextFieldProps) {
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
