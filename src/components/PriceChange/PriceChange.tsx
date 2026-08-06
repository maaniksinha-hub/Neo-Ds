import './PriceChange.css';

export type PriceChangeDirection = 'up' | 'down' | 'neutral';
export type PriceChangeFormat = 'both' | 'value' | 'percent';

export interface PriceChangeProps {
  value?: string;
  percent?: string;
  direction: PriceChangeDirection;
  format?: PriceChangeFormat;
  showArrow?: boolean;
  className?: string;
}

function Arrow({ direction }: { direction: PriceChangeDirection }) {
  if (direction === 'neutral') return null;
  return (
    <svg className={`ds-pricechange__arrow ds-pricechange__arrow--${direction}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 2v8M6 10L2.5 6.5M6 10l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PriceChange({ value, percent, direction, format = 'both', showArrow = true, className }: PriceChangeProps) {
  const classes = ['ds-pricechange', `ds-pricechange--${direction}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {showArrow && <Arrow direction={direction} />}
      {format !== 'percent' && value && <span className="ds-pricechange__value">{value}</span>}
      {format !== 'value' && percent && <span className="ds-pricechange__percent">({percent})</span>}
    </span>
  );
}
