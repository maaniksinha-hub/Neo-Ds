import type { ReactNode } from 'react';
import { MPriceChangePercentage, type MPriceChangePercentageDirection } from '../mPriceChangePercentage/mPriceChangePercentage';
import './mScripList.css';

export interface MScripListProps {
  logo: ReactNode;
  name: string;
  subtitle?: string;
  price: string;
  changeValue: string;
  changePercent: string;
  direction: MPriceChangePercentageDirection;
  quantity?: string;
  chart?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export function MScripList({
  logo,
  name,
  subtitle,
  price,
  changeValue,
  changePercent,
  direction,
  quantity,
  chart,
  onClick,
  className,
}: MScripListProps) {
  const classes = ['ds-scriplistitem', onClick && 'ds-scriplistitem--clickable', className].filter(Boolean).join(' ');
  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag className={classes} onClick={onClick} type={onClick ? 'button' : undefined}>
      <span className="ds-scriplistitem__logo">{logo}</span>
      <span className="ds-scriplistitem__info">
        <span className="ds-scriplistitem__name">{name}</span>
        {subtitle && <span className="ds-scriplistitem__subtitle">{subtitle}</span>}
        {quantity && <span className="ds-scriplistitem__quantity">{quantity}</span>}
      </span>
      {chart && <span className="ds-scriplistitem__chart">{chart}</span>}
      <span className="ds-scriplistitem__price">
        <span className="ds-scriplistitem__pricevalue">{price}</span>
        <MPriceChangePercentage value={changeValue} percent={changePercent} direction={direction} />
      </span>
    </Tag>
  );
}
