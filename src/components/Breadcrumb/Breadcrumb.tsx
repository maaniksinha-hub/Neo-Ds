import { useState } from 'react';
import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  maxVisible?: number;
  className?: string;
}

function Separator() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ds-breadcrumb__separator">
      <path d="M6 3.5L10 8l-4 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BreadcrumbLink({ item, isCurrent }: { item: BreadcrumbItem; isCurrent: boolean }) {
  return isCurrent ? (
    <span className="ds-breadcrumb__link ds-breadcrumb__link--current" aria-current="page">
      {item.label}
    </span>
  ) : (
    <a className="ds-breadcrumb__link" href={item.href ?? '#'} onClick={item.onClick}>
      {item.label}
    </a>
  );
}

export function Breadcrumb({ items, maxVisible, className }: BreadcrumbProps) {
  const [expanded, setExpanded] = useState(false);
  const shouldCollapse = maxVisible !== undefined && !expanded && items.length > maxVisible;

  const visibleItems = shouldCollapse
    ? [items[0], { label: '…overflow…', __overflow: true } as BreadcrumbItem & { __overflow: true }, ...items.slice(-(maxVisible - 1))]
    : items;

  return (
    <nav className={['ds-breadcrumb', className].filter(Boolean).join(' ')} aria-label="Breadcrumb">
      <ol className="ds-breadcrumb__list">
        {visibleItems.map((item, index) => {
          const isCurrent = index === visibleItems.length - 1;
          const isOverflow = '__overflow' in item;

          return (
            <li key={isOverflow ? '__overflow' : item.label} className="ds-breadcrumb__item">
              {isOverflow ? (
                <button type="button" className="ds-breadcrumb__overflow" onClick={() => setExpanded(true)} aria-label="Show all breadcrumb items">
                  …
                </button>
              ) : (
                <BreadcrumbLink item={item} isCurrent={isCurrent} />
              )}
              {!isCurrent && <Separator />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
