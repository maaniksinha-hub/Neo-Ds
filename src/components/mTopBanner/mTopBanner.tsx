import type { ReactNode } from 'react';
import './mTopBanner.css';

export type MTopBannerType = 'default' | 'negative';

export interface MTopBannerProps {
  type?: MTopBannerType;
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

/**
 * USE: top-banner, promo-banner, announcement-banner, alert-banner
 * WHEN: Page-level announcements, promotions, or alerts at the top of mobile screens — dismissible.
 * PLATFORM: Mobile
 * VARIANTS: Type (info/promo/warning), with/without CTA and dismiss.
 * INSTEAD-OF: Use mToast for temporary feedback, mBottomBanner for bottom-positioned banners.
 */
export function MTopBanner({ type = 'default', title, subtext, media, actions, onDismiss, className }: MTopBannerProps) {
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
