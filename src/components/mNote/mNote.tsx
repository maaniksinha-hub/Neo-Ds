import type { ReactNode } from 'react';
import './mNote.css';

export type MNoteType = 'neutral' | 'highlight' | 'warning' | 'negative' | 'positive';

export interface MNoteProps {
  type?: MNoteType;
  children: ReactNode;
  onDismiss?: () => void;
  className?: string;
}

/**
 * USE: inline-note, info-note, contextual-message, inline-alert
 * WHEN: Persistent inline messages providing context, tips, or warnings within content — not dismissible like toasts.
 * PLATFORM: Mobile
 * VARIANTS: Type (info/warning/success/error/neutral), with/without icon and CTA.
 * INSTEAD-OF: Use mToast for temporary dismissible feedback.
 */
export function MNote({ type = 'neutral', children, onDismiss, className }: MNoteProps) {
  const classes = ['ds-note', `ds-note--${type}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes}>
      <p className="ds-note__text">{children}</p>
      {onDismiss && (
        <button type="button" className="ds-note__dismiss" onClick={onDismiss} aria-label="Dismiss">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
