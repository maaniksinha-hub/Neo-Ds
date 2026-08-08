import './gLiveMarketIndicator.css';

export type MarketState = 'live' | 'closed' | 'pre-market';

export interface GLiveMarketIndicatorProps {
  state: MarketState;
  label?: string;
  className?: string;
}

const DEFAULT_LABEL: Record<MarketState, string> = {
  live: 'Market open',
  closed: 'Market closed',
  'pre-market': 'Pre-market',
};

/**
 * USE: live-market-indicator, market-status-bar, trading-status
 * WHEN: Showing current market status with label (e.g. &quot;Market Open&quot;, &quot;Market Closed&quot;) — typically in top nav or index strip.
 * PLATFORM: Global
 * VARIANTS: State (live/closed/pre-market).
 */
export function GLiveMarketIndicator({ state, label, className }: GLiveMarketIndicatorProps) {
  const classes = ['ds-livemarket', `ds-livemarket--${state}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      <span className="ds-livemarket__dot">{state === 'live' && <span className="ds-livemarket__ring" />}</span>
      <span className="ds-livemarket__label">{label ?? DEFAULT_LABEL[state]}</span>
    </span>
  );
}
