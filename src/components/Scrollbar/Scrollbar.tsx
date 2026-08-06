import type { ReactNode } from 'react';
import './Scrollbar.css';

export type ScrollbarOrientation = 'vertical' | 'horizontal';

export interface ScrollbarProps {
  children: ReactNode;
  orientation?: ScrollbarOrientation;
  maxHeight?: number;
  className?: string;
}

export function Scrollbar({ children, orientation = 'vertical', maxHeight, className }: ScrollbarProps) {
  const classes = ['ds-scrollbar', `ds-scrollbar--${orientation}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={maxHeight ? { maxHeight } : undefined}>
      {children}
    </div>
  );
}
