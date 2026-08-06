import type { MouseEventHandler } from 'react';
import './Scrim.css';

export interface ScrimProps {
  onClick?: MouseEventHandler<HTMLDivElement>;
  className?: string;
}

export function Scrim({ onClick, className }: ScrimProps) {
  return <div className={['ds-scrim', className].filter(Boolean).join(' ')} onClick={onClick} />;
}
