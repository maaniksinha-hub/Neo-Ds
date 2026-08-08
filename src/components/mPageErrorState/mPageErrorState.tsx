import type { ReactNode } from 'react';
import { GSolidButton } from '../gSolidButton/gSolidButton';
import './mPageErrorState.css';

export interface MPageErrorStateProps {
  illustration?: ReactNode;
  title: string;
  message?: string;
  retryLabel?: string;
  onRetry?: () => void;
  className?: string;
}

function DefaultIllustration() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="28" stroke="var(--stroke-default-primary-low)" strokeWidth="2" />
      <path d="M22 22l20 20M42 22L22 42" stroke="var(--text-neutral-tertiary)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function MPageErrorState({ illustration, title, message, retryLabel = 'Retry', onRetry, className }: MPageErrorStateProps) {
  return (
    <div className={['ds-pageerrorstate', className].filter(Boolean).join(' ')}>
      <span className="ds-pageerrorstate__illustration">{illustration ?? <DefaultIllustration />}</span>
      <p className="ds-pageerrorstate__title">{title}</p>
      {message && <p className="ds-pageerrorstate__message">{message}</p>}
      {onRetry && (
        <GSolidButton variant="outline" type="primary" size="44px" onClick={onRetry}>
          {retryLabel}
        </GSolidButton>
      )}
    </div>
  );
}
