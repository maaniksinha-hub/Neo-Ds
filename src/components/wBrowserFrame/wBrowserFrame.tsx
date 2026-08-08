import type { ReactNode } from 'react';
import './wBrowserFrame.css';

export interface WBrowserFrameProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

export function WBrowserFrame({ url = 'app.neo.com', children, className }: WBrowserFrameProps) {
  return (
    <div className={['ds-browserframe', className].filter(Boolean).join(' ')}>
      <div className="ds-browserframe__titlebar">
        <span className="ds-browserframe__dots">
          <span />
          <span />
          <span />
        </span>
        <span className="ds-browserframe__url">{url}</span>
      </div>
      <div className="ds-browserframe__content">{children}</div>
    </div>
  );
}
