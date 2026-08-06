import type { ReactNode } from 'react';
import './Banner.css';

export type BannerType = 'default' | 'negative';

export interface BannerProps {
  type?: BannerType;
  title: string;
  subtext?: string;
  media?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function Banner({ type = 'default', title, subtext, media, actions, className }: BannerProps) {
  const classes = ['ds-banner', `ds-banner--${type}`, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className="ds-banner__content">
        <p className="ds-banner__title">{title}</p>
        {subtext && <p className="ds-banner__subtext">{subtext}</p>}
        {actions && <div className="ds-banner__actions">{actions}</div>}
      </div>
      {media && <div className="ds-banner__media">{media}</div>}
    </div>
  );
}
