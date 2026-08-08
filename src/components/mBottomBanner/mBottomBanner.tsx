import type { ReactNode } from 'react';
import './mBottomBanner.css';

export interface MBottomBannerProps {
  title: string;
  subtext?: string;
  cta?: ReactNode;
  className?: string;
}

export function MBottomBanner({ title, subtext, cta, className }: MBottomBannerProps) {
  return (
    <div className={['ds-bottombanner', className].filter(Boolean).join(' ')}>
      <div className="ds-bottombanner__content">
        <p className="ds-bottombanner__title">{title}</p>
        {subtext && <p className="ds-bottombanner__subtext">{subtext}</p>}
      </div>
      {cta && <div className="ds-bottombanner__cta">{cta}</div>}
    </div>
  );
}
