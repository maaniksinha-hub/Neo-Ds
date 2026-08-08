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

/**
 * USE: status-timeline, progress-steps, order-progress, step-tracker
 * WHEN: Multi-step progress visualization — order lifecycle (placed → confirmed → executed), KYC steps.
 * PLATFORM: Global
 * VARIANTS: Step count, completed/active/pending step states.
 */
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

/**
 * USE: status-icon, step-indicator, progress-dot
 * WHEN: Individual status step icon within gStatusTimeline — checkmark, dot, or error icon per step.
 * PLATFORM: Global
 * VARIANTS: State (completed/active/pending/error).
 */
export function GBaseStatusIndicatorIcon({ status, children }: { status: GStatusTimelineStatus; children?: ReactNode }): ReactNode {
  return <span className={`ds-status-icon ds-status-icon--${status}`}>{children ?? <StatusDot status={status} />}</span>;
}
