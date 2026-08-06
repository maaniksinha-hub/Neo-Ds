import type { ReactNode } from 'react';
import './NewsCard.css';

export interface NewsCardProps {
  headline: string;
  source: string;
  timestamp: string;
  thumbnail?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function NewsCard({ headline, source, timestamp, thumbnail, onClick, className }: NewsCardProps) {
  const classes = ['ds-newscard', onClick && 'ds-newscard--clickable', className].filter(Boolean).join(' ');
  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag className={classes} onClick={onClick} type={onClick ? 'button' : undefined}>
      <div className="ds-newscard__content">
        <p className="ds-newscard__headline">{headline}</p>
        <span className="ds-newscard__meta">
          {source} · {timestamp}
        </span>
      </div>
      {thumbnail && <span className="ds-newscard__thumbnail">{thumbnail}</span>}
    </Tag>
  );
}
