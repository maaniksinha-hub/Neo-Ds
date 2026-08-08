import type { ReactNode } from 'react';
import './gScripCards.css';

export type GScripCardsDirection = 'up' | 'down';
export type GScripCardsBadgeVariant = 'default' | 'with-badge' | 'insights';

export interface GScripCardsProps {
  logo: ReactNode;
  name: string;
  price: string;
  priceDecimal?: string;
  changeValue: string;
  changePercent: string;
  direction: GScripCardsDirection;
  variant?: GScripCardsBadgeVariant;
  badgeLabel?: string;
  /** Renders the small pointed "Result"-style tag in the top-right corner */
  highlight?: boolean;
  highlightLabel?: string;
  /** Footer note shown only in the "insights" variant, e.g. "Dividend announced" */
  insightsNote?: string;
  /** Extended description text for the featured/large card layout (mScripLarge+description, mScrip+description) */
  description?: string;
  className?: string;
}

function GainLossArrow({ direction }: { direction: GScripCardsDirection }) {
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

/**
 * USE: stock-card, scrip-card, instrument-card, ticker-card
 * WHEN: Displaying a stock/instrument as a card with name, price, change, and mini chart — used in horizontal scrollable lists, watchlist grids.
 * PLATFORM: Global
 * VARIANTS: Size, with/without chart, with/without description.
 */
export function GScripCards({
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
  description,
  className,
}: GScripCardsProps) {
  const isInsights = variant === 'insights';
  const classes = ['ds-stockcard', isInsights && 'ds-stockcard--insights', description && 'ds-stockcard--large', className]
    .filter(Boolean)
    .join(' ');

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
        {description && <p className="ds-stockcard__description">{description}</p>}
      </div>
      {isInsights && insightsNote && (
        <div className="ds-stockcard__nudge">
          <span className="ds-stockcard__nudge-note">{insightsNote}</span>
        </div>
      )}
    </div>
  );
}
