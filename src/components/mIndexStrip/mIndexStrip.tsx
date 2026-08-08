import { MPriceChangePercentage, type MPriceChangePercentageDirection } from '../mPriceChangePercentage/mPriceChangePercentage';
import './mIndexStrip.css';

export interface MIndexStripItem {
  name: string;
  value: string;
  changeValue: string;
  changePercent: string;
  direction: MPriceChangePercentageDirection;
}

export interface MIndexStripProps {
  items: MIndexStripItem[];
  className?: string;
}

export function MIndexStrip({ items, className }: MIndexStripProps) {
  return (
    <div className={['ds-indexstrip', className].filter(Boolean).join(' ')}>
      {items.map((item) => (
        <div key={item.name} className="ds-indexstrip__item">
          <span className="ds-indexstrip__name">{item.name}</span>
          <span className="ds-indexstrip__value">{item.value}</span>
          <MPriceChangePercentage value={item.changeValue} percent={item.changePercent} direction={item.direction} />
        </div>
      ))}
    </div>
  );
}
