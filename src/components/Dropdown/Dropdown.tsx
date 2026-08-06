import type { SelectHTMLAttributes } from 'react';
import './Dropdown.css';

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  options: DropdownOption[];
}

function ChevronDown() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Dropdown({ options, disabled, className, ...rest }: DropdownProps) {
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
