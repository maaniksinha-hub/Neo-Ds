import type { ReactNode } from 'react';
import { GScrim } from '../gScrim/gScrim';
import './wSidePanel.css';

export interface WSidePanelProps {
  title: string;
  children: ReactNode;
  footer?: ReactNode;
  onClose: () => void;
  className?: string;
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * USE: side-panel, detail-panel, slide-over, inspector-panel
 * WHEN: Right-side panel for detail views, settings, and contextual information on web — stock details, order entry, filters.
 * PLATFORM: Web
 * VARIANTS: Width, with/without header.
 * INSTEAD-OF: Use mBottomsheet for mobile overlay patterns, wModal for centered dialogs.
 */
export function WSidePanel({ title, children, footer, onClose, className }: WSidePanelProps) {
  return (
    <>
      <GScrim onClick={onClose} />
      <div className={['ds-sidepanel', className].filter(Boolean).join(' ')} role="dialog" aria-modal="true">
        <div className="ds-sidepanel__header">
          <p className="ds-sidepanel__title">{title}</p>
          <button type="button" className="ds-sidepanel__close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        <div className="ds-sidepanel__body">{children}</div>
        {footer && <div className="ds-sidepanel__footer">{footer}</div>}
      </div>
    </>
  );
}
