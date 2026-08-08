import type { ReactNode } from 'react';
import './wScrollbar.css';

export type WScrollbarOrientation = 'vertical' | 'horizontal';

export interface WScrollbarProps {
  children: ReactNode;
  orientation?: WScrollbarOrientation;
  maxHeight?: number;
  className?: string;
}

export function WScrollbar({ children, orientation = 'vertical', maxHeight, className }: WScrollbarProps) {
  const classes = ['ds-scrollbar', `ds-scrollbar--${orientation}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={maxHeight ? { maxHeight } : undefined}>
      {children}
    </div>
  );
}
