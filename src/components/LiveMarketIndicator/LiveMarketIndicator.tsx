import './LiveMarketIndicator.css';

export type MarketState = 'live' | 'closed' | 'pre-market';

export interface LiveMarketIndicatorProps {
  state: MarketState;
  label?: string;
  className?: string;
}

const DEFAULT_LABEL: Record<MarketState, string> = {
  live: 'Market open',
  closed: 'Market closed',
  'pre-market': 'Pre-market',
};

export function LiveMarketIndicator({ state, label, className }: LiveMarketIndicatorProps) {
  const classes = ['ds-livemarket', `ds-livemarket--${state}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      <span className="ds-livemarket__dot">{state === 'live' && <span className="ds-livemarket__ring" />}</span>
      <span className="ds-livemarket__label">{label ?? DEFAULT_LABEL[state]}</span>
    </span>
  );
}
