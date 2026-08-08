import type { ReactNode } from 'react';
import './mIconCardWidget.css';

export interface MIconCardWidgetProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function MIconCardWidget({ icon, label, onClick, className }: MIconCardWidgetProps) {
  const classes = ['ds-iconcardwidget', className].filter(Boolean).join(' ');
  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="ds-iconcardwidget__icon">{icon}</span>
      <span className="ds-iconcardwidget__label">{label}</span>
    </button>
  );
}
