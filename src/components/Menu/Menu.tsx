import type { ReactNode } from 'react';
import './Menu.css';

export interface MenuItemData {
  label: string;
  onClick?: () => void;
  leadingIcon?: ReactNode;
  destructive?: boolean;
  disabled?: boolean;
}

export interface MenuGroupData {
  title?: string;
  items: MenuItemData[];
}

export interface MenuProps {
  groups: MenuGroupData[];
  className?: string;
}

export function MenuItem({ label, onClick, leadingIcon, destructive, disabled }: MenuItemData) {
  const classes = ['ds-menu__item', destructive && 'ds-menu__item--destructive'].filter(Boolean).join(' ');
  return (
    <button type="button" className={classes} onClick={onClick} disabled={disabled}>
      {leadingIcon && <span className="ds-menu__item-icon">{leadingIcon}</span>}
      <span>{label}</span>
    </button>
  );
}

export function Menu({ groups, className }: MenuProps) {
  return (
    <div className={['ds-menu', className].filter(Boolean).join(' ')} role="menu">
      {groups.map((group, index) => (
        <div key={group.title ?? index} className="ds-menu__group">
          {group.title && <p className="ds-menu__group-title">{group.title}</p>}
          {group.items.map((item) => (
            <MenuItem key={item.label} {...item} />
          ))}
          {index < groups.length - 1 && <div className="ds-menu__separator" />}
        </div>
      ))}
    </div>
  );
}
