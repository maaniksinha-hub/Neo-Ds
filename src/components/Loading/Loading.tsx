import './Loading.css';

export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps {
  size?: SpinnerSize;
  className?: string;
}

/**
 * USE: spinner, progress-bar, loading-indicator
 * WHEN: Indicating an in-progress async operation. Spinner for indeterminate waits, ProgressBar for operations with known completion percentage.
 * PLATFORM: Global
 */
export function Spinner({ size = 'medium', className }: SpinnerProps) {
  return (
    <svg
      className={['ds-spinner', `ds-spinner--${size}`, className].filter(Boolean).join(' ')}
      viewBox="0 0 24 24"
      fill="none"
      role="status"
      aria-label="Loading"
    >
      <circle cx="12" cy="12" r="10" stroke="var(--stroke-default-primary-low)" strokeWidth="3" />
      <path d="M12 2a10 10 0 0110 10" stroke="var(--fill-accent1-primary)" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
}

export function ProgressBar({ value, max = 100, className }: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className={['ds-progressbar', className].filter(Boolean).join(' ')} role="progressbar" aria-valuenow={value} aria-valuemax={max}>
      <div className="ds-progressbar__fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
