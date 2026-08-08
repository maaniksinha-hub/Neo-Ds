import './mKeyboard.css';

export interface MKeyboardProps {
  onKeyPress: (key: string) => void;
  onBackspace: () => void;
  className?: string;
}

const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'backspace'];

function BackspaceIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 5h11a1 1 0 011 1v12a1 1 0 01-1 1H8l-6-7 6-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M13 10l4 4M17 10l-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MKeyboard({ onKeyPress, onBackspace, className }: MKeyboardProps) {
  return (
    <div className={['ds-keyboard', className].filter(Boolean).join(' ')}>
      {KEYS.map((key) =>
        key === 'backspace' ? (
          <button key={key} type="button" className="ds-keyboard__key" onClick={onBackspace} aria-label="Backspace">
            <BackspaceIcon />
          </button>
        ) : (
          <button key={key} type="button" className="ds-keyboard__key" onClick={() => onKeyPress(key)}>
            {key}
          </button>
        ),
      )}
    </div>
  );
}
