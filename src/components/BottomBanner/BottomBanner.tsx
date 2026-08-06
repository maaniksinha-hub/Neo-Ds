import type { ReactNode } from 'react';
import './BottomBanner.css';

export interface BottomBannerProps {
  title: string;
  subtext?: string;
  cta?: ReactNode;
  className?: string;
}

export function BottomBanner({ title, subtext, cta, className }: BottomBannerProps) {
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
