import type { ReactNode } from 'react';
import './wScrollbar.css';

export type WScrollbarOrientation = 'vertical' | 'horizontal';

export interface WScrollbarProps {
  children: ReactNode;
  orientation?: WScrollbarOrientation;
  maxHeight?: number;
  className?: string;
}

/**
 * USE: scrollbar, custom-scrollbar, scroll-indicator
 * WHEN: Custom scrollbar for scrollable web containers — replacing default browser scrollbar with styled version.
 * PLATFORM: Web
 * VARIANTS: Orientation (vertical/horizontal), state (default/hover/active).
 */
export function WScrollbar({ children, orientation = 'vertical', maxHeight, className }: WScrollbarProps) {
  const classes = ['ds-scrollbar', `ds-scrollbar--${orientation}`, className].filter(Boolean).join(' ');
  return (
    <div className={classes} style={maxHeight ? { maxHeight } : undefined}>
      {children}
    </div>
  );
}
