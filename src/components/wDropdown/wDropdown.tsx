import type { SelectHTMLAttributes } from 'react';
import './wDropdown.css';

export interface WDropdownOption {
  label: string;
  value: string;
}

export interface WDropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: WDropdownOption[];
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WDropdown({ options, disabled, className, ...rest }: WDropdownProps) {
  const classes = ['ds-dropdown', disabled && 'ds-dropdown--disabled', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <select className="ds-dropdown__select" disabled={disabled} {...rest}>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="ds-dropdown__chevron">
        <ChevronDown />
      </span>
    </div>
  );
}
