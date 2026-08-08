import './mMarketDepth.css';

export interface MMarketDepthLevel {
  price: string;
  quantity: string;
  orders?: number;
}

export interface MMarketDepthProps {
  bids: MMarketDepthLevel[];
  asks: MMarketDepthLevel[];
  className?: string;
}

function DepthColumn({ title, levels, side }: { title: string; levels: MMarketDepthLevel[]; side: 'bid' | 'ask' }) {
  const maxQty = Math.max(...levels.map((l) => Number(l.quantity.replace(/,/g, '')) || 0), 1);

  return (
    <div className="ds-marketdepth__column">
      <div className="ds-marketdepth__columnhead">
        <span>{title}</span>
        <span>Qty</span>
      </div>
      {levels.map((level, i) => {
        const pct = (Number(level.quantity.replace(/,/g, '')) / maxQty) * 100;
        return (
          <div key={i} className={`ds-marketdepth__row ds-marketdepth__row--${side}`}>
            <span
              className="ds-marketdepth__bar"
              style={{ width: `${pct}%` }}
            />
            <span className="ds-marketdepth__price">{level.price}</span>
            <span className="ds-marketdepth__qty">{level.quantity}</span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * USE: market-depth, order-book, bid-ask-table, level2-data
 * WHEN: Market depth visualization showing bid and ask price levels with quantities — stock detail screens.
 * PLATFORM: Mobile
 * VARIANTS: Display style (table/chart).
 * INSTEAD-OF: Use wMarketDepth for web.
 */
export function MMarketDepth({ bids, asks, className }: MMarketDepthProps) {
  return (
    <div className={['ds-marketdepth', className].filter(Boolean).join(' ')}>
      <DepthColumn title="Bid" levels={bids} side="bid" />
      <DepthColumn title="Ask" levels={asks} side="ask" />
    </div>
  );
}
