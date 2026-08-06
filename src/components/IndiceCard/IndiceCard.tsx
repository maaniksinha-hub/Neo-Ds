import { PriceChange, type PriceChangeDirection } from '../PriceChange/PriceChange';
import { LineChart } from '../Charts/LineChart';
import './IndiceCard.css';

export interface IndiceCardProps {
  name: string;
  value: string;
  changeValue: string;
  changePercent: string;
  direction: PriceChangeDirection;
  chartValues: number[];
  className?: string;
}

export function IndiceCard({ name, value, changeValue, changePercent, direction, chartValues, className }: IndiceCardProps) {
  return (
    <div className={['ds-indicecard', className].filter(Boolean).join(' ')}>
      <div className="ds-indicecard__info">
        <span className="ds-indicecard__name">{name}</span>
        <span className="ds-indicecard__value">{value}</span>
        <PriceChange value={changeValue} percent={changePercent} direction={direction} />
      </div>
      <LineChart values={chartValues} direction={direction === 'down' ? 'negative' : 'positive'} width={96} height={40} />
    </div>
  );
}
