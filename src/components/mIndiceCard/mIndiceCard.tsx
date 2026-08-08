import { MPriceChangePercentage, type MPriceChangePercentageDirection } from '../mPriceChangePercentage/mPriceChangePercentage';
import { LineChart } from '../Charts/LineChart';
import './mIndiceCard.css';

export interface MIndiceCardProps {
  name: string;
  value: string;
  changeValue: string;
  changePercent: string;
  direction: MPriceChangePercentageDirection;
  chartValues: number[];
  className?: string;
}

export function MIndiceCard({ name, value, changeValue, changePercent, direction, chartValues, className }: MIndiceCardProps) {
  return (
    <div className={['ds-indicecard', className].filter(Boolean).join(' ')}>
      <div className="ds-indicecard__info">
        <span className="ds-indicecard__name">{name}</span>
        <span className="ds-indicecard__value">{value}</span>
        <MPriceChangePercentage value={changeValue} percent={changePercent} direction={direction} />
      </div>
      <LineChart values={chartValues} direction={direction === 'down' ? 'negative' : 'positive'} width={96} height={40} />
    </div>
  );
}
