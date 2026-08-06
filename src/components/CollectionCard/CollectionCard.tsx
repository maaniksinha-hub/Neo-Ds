import type { ReactNode } from 'react';
import './CollectionCard.css';

export type CollectionCardVariant = 'basket' | 'screener' | 'redirection';

export interface CollectionCardProps {
  variant?: CollectionCardVariant;
  title: string;
  subtitle?: string;
  media?: ReactNode;
  tags?: string[];
  onClick?: () => void;
  className?: string;
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CollectionCard({ variant = 'basket', title, subtitle, media, tags, onClick, className }: CollectionCardProps) {
  const classes = ['ds-collectioncard', `ds-collectioncard--${variant}`, className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} onClick={onClick}>
      {media && <span className="ds-collectioncard__media">{media}</span>}
      <span className="ds-collectioncard__body">
        <span className="ds-collectioncard__title">{title}</span>
        {subtitle && <span className="ds-collectioncard__subtitle">{subtitle}</span>}
        {tags && tags.length > 0 && (
          <span className="ds-collectioncard__tags">
            {tags.map((tag) => (
              <span key={tag} className="ds-collectioncard__tag">
                {tag}
              </span>
            ))}
          </span>
        )}
      </span>
      <ArrowIcon />
    </button>
  );
}
