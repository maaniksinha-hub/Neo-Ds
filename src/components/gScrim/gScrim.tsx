import type { MouseEventHandler } from 'react';
import './gScrim.css';

export interface GScrimProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

/**
 * USE: scrim, overlay, backdrop, dimmer
 * WHEN: Semi-transparent overlay behind modals, bottom sheets, and side panels — dims background content.
 * PLATFORM: Global
 * VARIANTS: Opacity levels (standard/heavy).
 */
export function GScrim({ onClick, className }: GScrimProps) {
  return <div className={['ds-scrim', className].filter(Boolean).join(' ')} onClick={onClick} />;
}
