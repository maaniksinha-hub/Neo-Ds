import type { InputHTMLAttributes } from 'react';
import './gSearchBar.css';

export type GSearchBarSize = '32px' | '44px';

export interface GSearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  size?: GSearchBarSize;
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
      <path d="M17 17l-4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function GSearchBar({ size = '44px', disabled, className, ...rest }: GSearchBarProps) {
  const classes = ['ds-searchbar', `ds-searchbar--${size}`, disabled && 'ds-searchbar--disabled', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <span className="ds-searchbar__icon">
        <SearchIcon />
      </span>
      <input type="search" className="ds-searchbar__input" placeholder="Search" disabled={disabled} {...rest} />
    </div>
  );
}
