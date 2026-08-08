import { GBaseStatusIndicatorIcon, type GStatusTimelineStatus } from '../gStatusTimeline/gStatusTimeline';
import './mOrderDetails.css';

export interface OrderDetailRow {
  label: string;
  value: string;
}

export interface MOrderDetailsProps {
  scripName: string;
  orderType: string;
  status: GStatusTimelineStatus;
  statusLabel: string;
  rows: OrderDetailRow[];
  className?: string;
}

/**
 * USE: order-detail-view, trade-confirmation, order-summary
 * WHEN: Full order details screen — showing order status, price, quantity, timestamps, and supporting information.
 * PLATFORM: Mobile
 * INSTEAD-OF: Use wOrderDetails for web.
 */
export function MOrderDetails({ scripName, orderType, status, statusLabel, rows, className }: MOrderDetailsProps) {
  return (
    <div className={['ds-orderdetails', className].filter(Boolean).join(' ')}>
      <div className="ds-orderdetails__header">
        <GBaseStatusIndicatorIcon status={status} />
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
