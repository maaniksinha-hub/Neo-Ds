import type { ReactNode } from 'react';
import './mIconCardWidget.css';

export interface MIconCardWidgetProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

/**
 * USE: icon-card-widget, feature-card, shortcut-card
 * WHEN: Feature entry points displayed as icon+label cards — home screen widgets and quick-access grids.
 * PLATFORM: Mobile
 */
export function MIconCardWidget({ icon, label, onClick, className }: MIconCardWidgetProps) {
  const classes = ['ds-iconcardwidget', className].filter(Boolean).join(' ');
  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="ds-iconcardwidget__icon">{icon}</span>
      <span className="ds-iconcardwidget__label">{label}</span>
    </button>
  );
}
