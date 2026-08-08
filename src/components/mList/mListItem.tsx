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
/**
 * USE: list-item, list-row, settings-row, detail-row
 * WHEN: A single row inside mList — settings entries, menu rows, and key-value detail rows.
 * PLATFORM: Mobile
 * VARIANTS: Leading (icon/avatar/none), trailing (text/icon/switch/chevron), with/without subtitle and divider, comfortable/compact density.
 * INSTEAD-OF: Always render inside mList, which owns the container styling. Use mScripList for stock rows and mBalanceList for balance rows — both are purpose-built and already carry their own row markup.
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
