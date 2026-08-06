import type { ReactNode } from 'react';
import './Toast.css';

export type ToastState = 'notification' | 'success' | 'error' | 'warning' | 'inverse';

export interface ToastProps {
  state?: ToastState;
  heading: string;
  subtext?: string;
  action?: ReactNode;
  onDismiss?: () => void;
  className?: string;
}

const icons: Record<ToastState, ReactNode> = {
  notification: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3a5 5 0 00-5 5v3l-1.5 2.5h13L15 11V8a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M8.2 15.5a1.8 1.8 0 003.6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  success: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M7 10l2 2 4-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 6.5v4M10 13.2v.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  warning: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
      <path d="M10 6.5v4M10 13.2v.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
  inverse: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3a5 5 0 00-5 5v3l-1.5 2.5h13L15 11V8a5 5 0 00-5-5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M8.2 15.5a1.8 1.8 0 003.6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  ),
};

export function Toast({ state = 'notification', heading, subtext, action, onDismiss, className }: ToastProps) {
  const classes = ['ds-toast', `ds-toast--${state}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes} role="status">
      <span className="ds-toast__icon">{icons[state]}</span>
      <div className="ds-toast__content">
        <p className="ds-toast__heading">{heading}</p>
        {subtext && <p className="ds-toast__subtext">{subtext}</p>}
        {action && <div className="ds-toast__action">{action}</div>}
      </div>
      {onDismiss && (
        <button type="button" className="ds-toast__dismiss" onClick={onDismiss} aria-label="Dismiss">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
