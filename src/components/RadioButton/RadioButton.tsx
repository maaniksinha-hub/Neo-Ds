import { useId, type InputHTMLAttributes } from 'react';
import './RadioButton.css';

export type RadioButtonSize = 'default' | 'small';

export interface RadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  size?: RadioButtonSize;
}

export function RadioButton({ label, size = 'default', disabled, id, className, ...rest }: RadioButtonProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label
      htmlFor={inputId}
      className={['ds-radio', `ds-radio--${size}`, disabled && 'ds-radio--disabled', className].filter(Boolean).join(' ')}
    >
      <span className="ds-radio__circle">
        <input id={inputId} type="radio" className="ds-radio__input" disabled={disabled} {...rest} />
        <span className="ds-radio__dot" />
      </span>
      {label && <span className="ds-radio__label">{label}</span>}
    </label>
  );
}
