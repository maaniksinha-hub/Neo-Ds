import { PriceChange, type PriceChangeDirection } from '../PriceChange/PriceChange';
import './IndexStrip.css';

export interface IndexStripItem {
  name: string;
  value: string;
  changeValue: string;
  changePercent: string;
  direction: PriceChangeDirection;
}

export interface IndexStripProps {
  items: IndexStripItem[];
  className?: string;
}

export function IndexStrip({ items, className }: IndexStripProps) {
  return (
    <div className={['ds-indexstrip', className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <div key={item.name} className="ds-indexstrip__item">
          <span className="ds-indexstrip__name">{item.name}</span>
          <span className="ds-indexstrip__value">{item.value}</span>
          <PriceChange value={item.changeValue} percent={item.changePercent} direction={item.direction} />
        </div>
      ))}
    </div>
  );
}
