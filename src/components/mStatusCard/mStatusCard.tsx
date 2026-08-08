import type { ReactNode } from 'react';
import { GStatusTimeline, GBaseStatusIndicatorIcon, type GStatusTimelineStep, type GStatusTimelineStatus } from '../gStatusTimeline/gStatusTimeline';
import './mStatusCard.css';

export type MStatusCardStatus = 'success' | 'pending' | 'failed' | 'partial';

export interface MStatusCardInfo {
  label: string;
  value: string;
}

export interface MStatusCardProps {
  status: MStatusCardStatus;
  title: string;
  subtitle?: string;
  timeline?: GStatusTimelineStep[];
  info?: MStatusCardInfo[];
  className?: string;
}

const STATUS_ICON_MAP: Record<MStatusCardStatus, GStatusTimelineStatus> = {
  success: 'completed',
  pending: 'in-process',
  failed: 'failed',
  partial: 'in-process',
};

const STATUS_LABEL: Record<MStatusCardStatus, string> = {
  success: 'Executed',
  pending: 'Pending',
  failed: 'Failed',
  partial: 'Partially executed',
};

/**
 * USE: status-card, order-status, transaction-status, progress-card
 * WHEN: Displaying status of orders, transactions, or processes — &quot;Pending&quot;, &quot;Executed&quot;, &quot;Failed&quot; with timeline.
 * PLATFORM: Mobile
 * VARIANTS: Status type (success/pending/failed/partial), with/without timeline and details.
 */
export function MStatusCard({ status, title, subtitle, timeline, info, className }: MStatusCardProps): ReactNode {
  return (
    <div className={['ds-statuscard', className].filter(Boolean).join(' ')}>
      <div className="ds-statuscard__header">
        <GBaseStatusIndicatorIcon status={STATUS_ICON_MAP[status]} />
        <span className="ds-statuscard__headertext">
          <span className="ds-statuscard__title">{title}</span>
          {subtitle && <span className="ds-statuscard__subtitle">{subtitle}</span>}
        </span>
        <span className={`ds-statuscard__badge ds-statuscard__badge--${status}`}>{STATUS_LABEL[status]}</span>
      </div>

      {info && info.length > 0 && (
        <div className="ds-statuscard__infostrip">
          {info.map((item) => (
            <span key={item.label} className="ds-statuscard__infoitem">
              <span className="ds-statuscard__infolabel">{item.label}</span>
              <span className="ds-statuscard__infovalue">{item.value}</span>
            </span>
          ))}
        </div>
      )}

      {timeline && timeline.length > 0 && (
        <div className="ds-statuscard__timeline">
          <GStatusTimeline steps={timeline} />
        </div>
      )}
    </div>
  );
}
