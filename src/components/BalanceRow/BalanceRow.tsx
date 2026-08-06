import { PriceChange, type PriceChangeDirection } from '../PriceChange/PriceChange';
import './BalanceRow.css';

export interface BalanceRowProps {
  label: string;
  value: string;
  secondaryValue?: string;
  direction?: PriceChangeDirection;
  className?: string;
}

export function BalanceRow({ label, value, secondaryValue, direction, className }: BalanceRowProps) {
  return (
    <div className={['ds-balancerow', className].filter(Boolean).join(' ')}>
      <span className="ds-balancerow__label">{label}</span>
      <span className="ds-balancerow__values">
        <span className="ds-balancerow__value">{value}</span>
        {secondaryValue && direction && <PriceChange value={secondaryValue} direction={direction} format="value" />}
      </span>
    </div>
  );
}
