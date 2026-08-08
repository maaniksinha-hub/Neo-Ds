import type { ReactNode } from 'react';
import './gStatusTimeline.css';

export type GStatusTimelineStatus = 'yet-to-start' | 'in-process' | 'completed' | 'failed';

export interface GStatusTimelineStep {
  label: string;
  supportingText?: string;
  status: GStatusTimelineStatus;
}

export interface GStatusTimelineProps {
  steps: GStatusTimelineStep[];
  className?: string;
}

function StatusDot({ status }: { status: GStatusTimelineStatus }) {
  return <span className={`ds-status-indicator__dot ds-status-indicator__dot--${status}`} />;
}

export function GStatusTimeline({ steps, className }: GStatusTimelineProps) {
  return (
    <ol className={['ds-status-indicator', className].filter(Boolean).join(' ')}>
      {steps.map((step, index) => (
        <li key={step.label} className="ds-status-indicator__step">
          <span className="ds-status-indicator__track">
            <StatusDot status={step.status} />
            {index < steps.length - 1 && <span className={`ds-status-indicator__line ds-status-indicator__line--${step.status}`} />}
          </span>
          <span className="ds-status-indicator__content">
            <span className={`ds-status-indicator__label ds-status-indicator__label--${step.status}`}>{step.label}</span>
            {step.supportingText && <span className="ds-status-indicator__supporting">{step.supportingText}</span>}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function GBaseStatusIndicatorIcon({ status, children }: { status: GStatusTimelineStatus; children?: ReactNode }): ReactNode {
  return <span className={`ds-status-icon ds-status-icon--${status}`}>{children ?? <StatusDot status={status} />}</span>;
}
