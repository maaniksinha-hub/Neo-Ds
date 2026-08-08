import type { ReactNode } from 'react';
import './mList.css';

export type MListItemDensity = 'comfortable' | 'compact';

export interface MListItemProps {
  leading?: ReactNode;
  title: string;
  subtitle?: string;
  trailing?: ReactNode;
  divider?: boolean;
  density?: MListItemDensity;
  onClick?: () => void;
  className?: string;
}

/**
 * Individual row within mList / wList / mListUniversal / wListUniversal.
 * See mList for full usage guidance — this is the row primitive, not a standalone component.
 */
export function MListItem({ leading, title, subtitle, trailing, divider = true, density = 'comfortable', onClick, className }: MListItemProps) {
  const classes = [
    'ds-list-item',
    `ds-list-item--${density}`,
    divider && 'ds-list-item--divider',
    onClick && 'ds-list-item--interactive',
    className,
  ]
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
