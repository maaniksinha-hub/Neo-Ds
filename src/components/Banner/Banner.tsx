import type { ReactNode } from 'react';
import './Banner.css';

export type BannerType = 'default' | 'negative';

export interface BannerProps {
  type?: BannerType;
  title: string;
  subtext?: string;
  media?: ReactNode;
  actions?: ReactNode;
  onDismiss?: () => void;
  className?: string;
}

function DismissIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Banner({ type = 'default', title, subtext, media, actions, onDismiss, className }: BannerProps) {
  const classes = ['ds-banner', `ds-banner--${type}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="ds-banner__content">
        <p className="ds-banner__title">{title}</p>
        {subtext && <p className="ds-banner__subtext">{subtext}</p>}
        {actions && <div className="ds-banner__actions">{actions}</div>}
      </div>
      {media && <div className="ds-banner__media">{media}</div>}
      {onDismiss && (
        <button type="button" className="ds-banner__dismiss" onClick={onDismiss} aria-label="Dismiss">
          <DismissIcon />
        </button>
      )}
    </div>
  );
}
