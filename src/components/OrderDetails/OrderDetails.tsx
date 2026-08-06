import { StatusIcon, type StatusIndicatorStatus } from '../StatusIndicator/StatusIndicator';
import './OrderDetails.css';

export interface OrderDetailRow {
  label: string;
  value: string;
}

export interface OrderDetailsProps {
  scripName: string;
  orderType: string;
  status: StatusIndicatorStatus;
  statusLabel: string;
  rows: OrderDetailRow[];
  className?: string;
}

export function OrderDetails({ scripName, orderType, status, statusLabel, rows, className }: OrderDetailsProps) {
  return (
    <div className={['ds-orderdetails', className].filter(Boolean).join(' ')}>
      <div className="ds-orderdetails__header">
        <StatusIcon status={status} />
        <div className="ds-orderdetails__headertext">
          <span className="ds-orderdetails__scripname">{scripName}</span>
          <span className="ds-orderdetails__ordertype">{orderType}</span>
        </div>
        <span className={`ds-orderdetails__status ds-orderdetails__status--${status}`}>{statusLabel}</span>
      </div>
      <dl className="ds-orderdetails__rows">
        {rows.map((row) => (
          <div key={row.label} className="ds-orderdetails__row">
            <dt className="ds-orderdetails__rowlabel">{row.label}</dt>
            <dd className="ds-orderdetails__rowvalue">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
