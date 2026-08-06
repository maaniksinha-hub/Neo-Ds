import type { ReactNode } from 'react';
import './AppBar.css';

export interface AppBarProps {
  title: string;
  subtext?: string;
  onBack?: () => void;
  actions?: ReactNode;
  cta?: ReactNode;
  className?: string;
}

function BackArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function AppBar({ title, subtext, onBack, actions, cta, className }: AppBarProps) {
  return (
    <header className={['ds-appbar', className].filter(Boolean).join(' ')}>
      {onBack && (
        <button type="button" className="ds-appbar__back" onClick={onBack} aria-label="Back">
          <BackArrow />
        </button>
      )}
      <div className="ds-appbar__title-block">
        <p className="ds-appbar__title">{title}</p>
        {subtext && <p className="ds-appbar__subtext">{subtext}</p>}
      </div>
      {actions && <div className="ds-appbar__actions">{actions}</div>}
      {cta}
    </header>
  );
}
