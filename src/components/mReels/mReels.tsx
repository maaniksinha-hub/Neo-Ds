import type { ReactNode } from 'react';
import './mReels.css';

export interface MReelsProps {
  thumbnail: ReactNode;
  title: string;
  progress?: number;
  onClick?: () => void;
  className?: string;
}

function PlayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="16" fill="rgba(0,0,0,0.4)" />
      <path d="M13 10l9 6-9 6V10z" fill="#fff" />
    </svg>
  );
}

/**
 * USE: reels-card, video-card, short-video-card
 * WHEN: Vertical video/reels content cards for financial education or market commentary.
 * PLATFORM: Mobile
 * VARIANTS: With/without progress indicator.
 */
export function MReels({ thumbnail, title, progress, onClick, className }: MReelsProps) {
  const classes = ['ds-reelcard', className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="ds-reelcard__thumbnail">{thumbnail}</span>
      <span className="ds-reelcard__overlay">
        <PlayIcon />
        <span className="ds-reelcard__title">{title}</span>
      </span>
      {progress !== undefined && (
        <span className="ds-reelcard__progresstrack">
          <span className="ds-reelcard__progressfill" style={{ width: `${Math.min(100, Math.max(0, progress))}%` }} />
        </span>
      )}
    </button>
  );
}
