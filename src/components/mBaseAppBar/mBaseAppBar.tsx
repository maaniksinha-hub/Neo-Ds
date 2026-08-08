import type { ReactNode } from 'react';
import './mBaseAppBar.css';

export interface MBaseAppBarProps {
  title: string;
  subtext?: string;
  onBack?: () => void;
  actions?: ReactNode;
  cta?: ReactNode;
  className?: string;
}

function BackArrow() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * USE: page-title-bar, screen-header, stock-detail-bar
 * WHEN: Page needs a dedicated title bar separate from mTopNav (detail screens, titled pages)
 * INSTEAD OF: Frame + back button + title text + action icons
 * VARIANTS: Type: &quot;Homepage&quot;|&quot;Title+CTA&quot;|&quot;Title+icons&quot;|&quot;Title+subtext &amp; CTA&quot;|&quot;with LTP&quot;
 * PROPS: Title#200:143
 */
export function MBaseAppBar({ title, subtext, onBack, actions, cta, className }: MBaseAppBarProps) {
  return (
    <header className={['ds-appbar', className].filter(Boolean).join(' ')}>
      {onBack && (
        <button type="button" className="ds-appbar__back" onClick={onBack} aria-label="Back">
          <BackArrow />
        </button>
      )}
      <div className="ds-appbar__title-block">
        <p className="ds-appbar__title">{title}</p>
        {subtext && <p className="ds-appbar__subtext">{subtext}</p>}
      </div>
      {actions && <div className="ds-appbar__actions">{actions}</div>}
      {cta}
    </header>
  );
}
