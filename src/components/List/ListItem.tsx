import type { ReactNode } from 'react';
import './List.css';

export interface ListItemProps {
  leading?: ReactNode;
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  divider?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ListItem({ leading, title, subtitle, trailing, divider = true, onClick, className }: ListItemProps) {
  const classes = ['ds-list-item', divider && 'ds-list-item--divider', onClick && 'ds-list-item--interactive', className]
    .filter(Boolean)
    .join(' ');

  const Element = onClick ? 'button' : 'div';

  return (
    <Element className={classes} onClick={onClick} type={onClick ? 'button' : undefined}>
      {leading && <span className="ds-list-item__leading">{leading}</span>}
      <span className="ds-list-item__content">
        <span className="ds-list-item__title">{title}</span>
        {subtitle && <span className="ds-list-item__subtitle">{subtitle}</span>}
      </span>
      {trailing && <span className="ds-list-item__trailing">{trailing}</span>}
    </Element>
  );
}
