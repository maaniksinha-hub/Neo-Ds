import './Breadcrumb.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

function Separator() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ds-breadcrumb__separator">
      <path d="M6 3.5L10 8l-4 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav className={['ds-breadcrumb', className].filter(Boolean).join(' ')} aria-label="Breadcrumb">
      <ol className="ds-breadcrumb__list">
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1;
          return (
            <li key={item.label} className="ds-breadcrumb__item">
              {isCurrent ? (
                <span className="ds-breadcrumb__link ds-breadcrumb__link--current" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <a className="ds-breadcrumb__link" href={item.href ?? '#'} onClick={item.onClick}>
                  {item.label}
                </a>
              )}
              {!isCurrent && <Separator />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
