import type { ReactNode } from 'react';
import './StockCard.css';

export type StockCardDirection = 'up' | 'down';
export type StockCardBadgeVariant = 'default' | 'with-badge' | 'insights';

export interface StockCardProps {
  logo: ReactNode;
  name: string;
  price: string;
  priceDecimal?: string;
  changeValue: string;
  changePercent: string;
  direction: StockCardDirection;
  variant?: StockCardBadgeVariant;
  badgeLabel?: string;
  /** Renders the small pointed "Result"-style tag in the top-right corner */
  highlight?: boolean;
  highlightLabel?: string;
  /** Footer note shown only in the "insights" variant, e.g. "Dividend announced" */
  insightsNote?: string;
  className?: string;
}

function GainLossArrow({ direction }: { direction: StockCardDirection }) {
  return (
    <svg
      className={`ds-stockcard__arrow ds-stockcard__arrow--${direction}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path d="M6 2v8M6 10L2.5 6.5M6 10l3.5-3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function StockCard({
  logo,
  name,
  price,
  priceDecimal,
  changeValue,
  changePercent,
  direction,
  variant = 'default',
  badgeLabel,
  highlight = false,
  highlightLabel = 'Result',
  insightsNote,
  className,
}: StockCardProps) {
  const isInsights = variant === 'insights';
  const classes = ['ds-stockcard', isInsights && 'ds-stockcard--insights', className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {highlight && (
        <span className="ds-stockcard__tent">
          <span className="ds-stockcard__tent-pointer" />
          <span className="ds-stockcard__tent-label">{highlightLabel}</span>
        </span>
      )}
      <div className="ds-stockcard__body">
        <div className="ds-stockcard__header">
          <span className="ds-stockcard__logo">{logo}</span>
          {variant === 'with-badge' && badgeLabel && <span className="ds-stockcard__badge">{badgeLabel}</span>}
        </div>
        <p className="ds-stockcard__name">{name}</p>
        <div className="ds-stockcard__price-row">
          <span className="ds-stockcard__price">{price}</span>
          {priceDecimal && <span className="ds-stockcard__price-decimal">{priceDecimal}</span>}
        </div>
        <div className={`ds-stockcard__change ds-stockcard__change--${direction}`}>
          <span>{changeValue}</span>
          <span className="ds-stockcard__change-pct">
            (<GainLossArrow direction={direction} />
            {changePercent})
          </span>
        </div>
      </div>
      {isInsights && insightsNote && (
        <div className="ds-stockcard__nudge">
          <span className="ds-stockcard__nudge-note">{insightsNote}</span>
        </div>
      )}
    </div>
  );
}
