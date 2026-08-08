import { MPriceChangePercentage, type MPriceChangePercentageDirection } from '../mPriceChangePercentage/mPriceChangePercentage';
import './mBalanceList.css';

export interface MBalanceListProps {
  label: string;
  value: string;
  secondaryValue?: string;
  direction?: MPriceChangePercentageDirection;
  className?: string;
}

/**
 * USE: balance-list, funds-list, account-balance, wallet-row
 * WHEN: Displaying financial balances — available margin, holdings value, P&amp;L breakdown, fund balances.
 * PLATFORM: Mobile
 * VARIANTS: With/without secondary value, positive/negative coloring, expandable detail.
 */
export function MBalanceList({ label, value, secondaryValue, direction, className }: MBalanceListProps) {
  return (
    <div className={['ds-balancerow', className].filter(Boolean).join(' ')}>
      <span className="ds-balancerow__label">{label}</span>
      <span className="ds-balancerow__values">
        <span className="ds-balancerow__value">{value}</span>
        {secondaryValue && direction && <MPriceChangePercentage value={secondaryValue} direction={direction} format="value" />}
      </span>
    </div>
  );
}
