import { useId, type InputHTMLAttributes } from 'react';
import './gCheckbox.css';

export type GCheckboxSize = 'default' | 'small' | 'xsmall';

export interface GCheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  size?: GCheckboxSize;
  indeterminate?: boolean;
}

export function GCheckbox({ label, size = 'default', indeterminate = false, disabled, id, className, ...rest }: GCheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label
      htmlFor={inputId}
      className={['ds-checkbox', `ds-checkbox--${size}`, disabled && 'ds-checkbox--disabled', className].filter(Boolean).join(' ')}
    >
      <span className="ds-checkbox__box">
        <input
          id={inputId}
          type="checkbox"
          className="ds-checkbox__input"
          disabled={disabled}
          ref={(el) => {
            if (el) el.indeterminate = indeterminate;
          }}
          {...rest}
        />
        <svg className="ds-checkbox__check" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          {indeterminate ? (
            <path d="M4 8h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          ) : (
            <path d="M3.5 8.2l3 3 6-6.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </svg>
      </span>
      {label && <span className="ds-checkbox__label">{label}</span>}
    </label>
  );
}
