import { useState, useRef, useEffect } from 'react';
import './wIndexSelector.css';

export interface WIndexSelectorOption {
  value: string;
  label: string;
}

export interface WIndexSelectorProps {
  options: WIndexSelectorOption[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: open ? 'rotate(180deg)' : undefined, transition: 'transform 0.15s ease' }}
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * USE: web-index-selector, index-dropdown, market-index-picker
 * WHEN: Dropdown selector for choosing which market index to display — NIFTY 50, SENSEX, NIFTY Bank etc.
 * PLATFORM: Web
 * VARIANTS: State (default/open/selected), item count.
 */
export function WIndexSelector({ options, value, onChange, className }: WIndexSelectorProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={rootRef} className={['ds-indexselector', open && 'ds-indexselector--open', className].filter(Boolean).join(' ')}>
      <button type="button" className="ds-indexselector__trigger" onClick={() => setOpen((v) => !v)}>
        <span>{selected?.label ?? 'Select index'}</span>
        <ChevronIcon open={open} />
      </button>
      {open && (
        <ul className="ds-indexselector__menu" role="listbox">
          {options.map((option) => (
            <li key={option.value}>
              <button
                type="button"
                className={['ds-indexselector__option', option.value === value && 'ds-indexselector__option--selected'].filter(Boolean).join(' ')}
                onClick={() => {
                  onChange(option.value);
                  setOpen(false);
                }}
                role="option"
                aria-selected={option.value === value}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
