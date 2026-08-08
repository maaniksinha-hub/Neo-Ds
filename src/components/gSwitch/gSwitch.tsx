import { useId, type InputHTMLAttributes } from 'react';
import './gSwitch.css';

export interface GSwitchProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
}

export function GSwitch({ label, disabled, id, className, ...rest }: GSwitchProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <label
      htmlFor={inputId}
      className={['ds-switch', disabled && 'ds-switch--disabled', className].filter(Boolean).join(' ')}
    >
      <span className="ds-switch__track">
        <input id={inputId} type="checkbox" className="ds-switch__input" disabled={disabled} {...rest} />
        <span className="ds-switch__thumb" />
      </span>
      {label && <span className="ds-switch__label">{label}</span>}
    </label>
  );
}
