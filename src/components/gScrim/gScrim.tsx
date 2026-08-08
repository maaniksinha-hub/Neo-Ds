import type { MouseEventHandler } from 'react';
import './gScrim.css';

export interface GScrimProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

export function GScrim({ onClick, className }: GScrimProps) {
  return <div className={['ds-scrim', className].filter(Boolean).join(' ')} onClick={onClick} />;
}
