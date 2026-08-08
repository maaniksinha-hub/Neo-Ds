import { useId, type InputHTMLAttributes } from 'react';
import './gRadioButton.css';

export type GRadioButtonSize = 'default' | 'small';

export interface GRadioButtonProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  size?: GRadioButtonSize;
}

export function GRadioButton({ label, size = 'default', disabled, id, className, ...rest }: GRadioButtonProps) {
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
