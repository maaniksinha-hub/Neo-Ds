import type { ReactNode } from 'react';
import { StatusIndicator, StatusIcon, type StatusStep, type StatusIndicatorStatus } from '../StatusIndicator/StatusIndicator';
import './StatusCard.css';

export type StatusCardStatus = 'success' | 'pending' | 'failed' | 'partial';

export interface StatusCardInfo {
  label: string;
  value: string;
}

export interface StatusCardProps {
  status: StatusCardStatus;
  title: string;
  subtitle?: string;
  timeline?: StatusStep[];
  info?: StatusCardInfo[];
  className?: string;
}

const STATUS_ICON_MAP: Record<StatusCardStatus, StatusIndicatorStatus> = {
  success: 'completed',
  pending: 'in-process',
  failed: 'failed',
  partial: 'in-process',
};

const STATUS_LABEL: Record<StatusCardStatus, string> = {
  success: 'Executed',
  pending: 'Pending',
  failed: 'Failed',
  partial: 'Partially executed',
};

export function StatusCard({ status, title, subtitle, timeline, info, className }: StatusCardProps): ReactNode {
  return (
    <div className={['ds-statuscard', className].filter(Boolean).join(' ')}>
      <div className="ds-statuscard__header">
        <StatusIcon status={STATUS_ICON_MAP[status]} />
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
          <StatusIndicator steps={timeline} />
        </div>
      )}
    </div>
  );
}
