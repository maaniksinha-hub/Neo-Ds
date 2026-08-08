import type { ReactNode } from 'react';
import { GScrim } from '../gScrim/gScrim';
import './mBottomsheet.css';

export type MBottomsheetType = 'default' | 'fullscreen';

export interface MBottomsheetProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  type?: MBottomsheetType;
  onClose: () => void;
  headerAction?: ReactNode;
  showCloseButton?: boolean;
  className?: string;
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function MBottomsheet({
  title,
  subtitle,
  children,
  type = 'default',
  onClose,
  headerAction,
  showCloseButton = false,
  className,
}: MBottomsheetProps) {
  const classes = ['ds-bottomsheet', `ds-bottomsheet--${type}`, className].filter(Boolean).join(' ');

  return (
    <>
      <GScrim onClick={onClose} />
      <div className={classes} role="dialog" aria-modal="true">
        <span className="ds-bottomsheet__handle" />
        {(title || showCloseButton) && (
          <div className="ds-bottomsheet__header">
            <div className="ds-bottomsheet__headertext">
              {title && <p className="ds-bottomsheet__title">{title}</p>}
              {subtitle && <p className="ds-bottomsheet__subtitle">{subtitle}</p>}
            </div>
            {headerAction}
            {showCloseButton && (
              <button type="button" className="ds-bottomsheet__close" onClick={onClose} aria-label="Close">
                <CloseIcon />
              </button>
            )}
          </div>
        )}
        <div className="ds-bottomsheet__body">{children}</div>
      </div>
    </>
  );
}
