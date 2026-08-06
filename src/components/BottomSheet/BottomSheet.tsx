import type { ReactNode } from 'react';
import { Scrim } from '../Scrim/Scrim';
import './BottomSheet.css';

export type BottomSheetType = 'default' | 'fullscreen';

export interface BottomSheetProps {
  title?: string;
  children: ReactNode;
  type?: BottomSheetType;
  onClose: () => void;
  className?: string;
}

export function BottomSheet({ title, children, type = 'default', onClose, className }: BottomSheetProps) {
  const classes = ['ds-bottomsheet', `ds-bottomsheet--${type}`, className].filter(Boolean).join(' ');

  return (
    <>
      <Scrim onClick={onClose} />
      <div className={classes} role="dialog" aria-modal="true">
        <span className="ds-bottomsheet__handle" />
        {title && (
          <div className="ds-bottomsheet__header">
            <p className="ds-bottomsheet__title">{title}</p>
          </div>
        )}
        <div className="ds-bottomsheet__body">{children}</div>
      </div>
    </>
  );
}
