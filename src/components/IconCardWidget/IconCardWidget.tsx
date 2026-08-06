import type { ReactNode } from 'react';
import './IconCardWidget.css';

export interface IconCardWidgetProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

export function IconCardWidget({ icon, label, onClick, className }: IconCardWidgetProps) {
  const classes = ['ds-iconcardwidget', className].filter(Boolean).join(' ');
  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="ds-iconcardwidget__icon">{icon}</span>
      <span className="ds-iconcardwidget__label">{label}</span>
    </button>
  );
}
