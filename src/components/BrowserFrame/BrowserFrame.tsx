import type { ReactNode } from 'react';
import './BrowserFrame.css';

export interface BrowserFrameProps {
  url?: string;
  children: ReactNode;
  className?: string;
}

export function BrowserFrame({ url = 'app.neo.com', children, className }: BrowserFrameProps) {
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
