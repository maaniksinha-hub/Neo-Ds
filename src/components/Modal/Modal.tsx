import type { ReactNode } from 'react';
import { Scrim } from '../Scrim/Scrim';
import './Modal.css';

export interface ModalProps {
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

export function Modal({ title, children, footer, onClose, className }: ModalProps) {
  return (
    <>
      <Scrim onClick={onClose} />
      <div className={['ds-modal', className].filter(Boolean).join(' ')} role="dialog" aria-modal="true">
        <div className="ds-modal__header">
          <p className="ds-modal__title">{title}</p>
          <button type="button" className="ds-modal__close" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        <div className="ds-modal__body">{children}</div>
        {footer && <div className="ds-modal__footer">{footer}</div>}
      </div>
    </>
  );
}
