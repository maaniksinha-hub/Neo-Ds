import './mPriceChangePercentage.css';

export type MPriceChangePercentageDirection = 'up' | 'down' | 'neutral';
export type MPriceChangePercentageFormat = 'both' | 'value' | 'percent';

export interface MPriceChangePercentageProps {
  value?: string;
  percent?: string;
  direction: MPriceChangePercentageDirection;
  format?: MPriceChangePercentageFormat;
  showArrow?: boolean;
  className?: string;
}

function Arrow({ direction }: { direction: MPriceChangePercentageDirection }) {
  if (direction === 'neutral') return null;
  return (
    <svg className={`ds-pricechange__arrow ds-pricechange__arrow--${direction}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="M6 2v8M6 10L2.5 6.5M6 10l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * USE: price-change-percent, change-display, gain-loss-value
 * WHEN: Displaying price change as both absolute value and percentage with positive/negative color coding.
 * PLATFORM: Mobile
 * VARIANTS: Display format (percent only, absolute only, both), positive/negative/neutral states.
 */
export function MPriceChangePercentage({ value, percent, direction, format = 'both', showArrow = true, className }: MPriceChangePercentageProps) {
  const classes = ['ds-pricechange', `ds-pricechange--${direction}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {showArrow && <Arrow direction={direction} />}
      {format !== 'percent' && value && <span className="ds-pricechange__value">{value}</span>}
      {format !== 'value' && percent && <span className="ds-pricechange__percent">({percent})</span>}
    </span>
  );
}
