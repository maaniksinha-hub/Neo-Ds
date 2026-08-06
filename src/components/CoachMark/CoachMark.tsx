import type { ReactNode } from 'react';
import './CoachMark.css';

export type CoachMarkArrow = 'top' | 'bottom' | 'left' | 'right';
export type CoachMarkAlign = 'start' | 'center' | 'end';

export interface CoachMarkProps {
  title: string;
  body: string;
  image?: ReactNode;
  arrow?: CoachMarkArrow;
  align?: CoachMarkAlign;
  step?: string;
  onNext?: () => void;
  onSkip?: () => void;
  className?: string;
}

export function CoachMark({ title, body, image, arrow = 'bottom', align = 'center', step, onNext, onSkip, className }: CoachMarkProps) {
  const classes = ['ds-coachmark', `ds-coachmark--arrow-${arrow}`, `ds-coachmark--align-${align}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} role="dialog">
      <span className="ds-coachmark__arrow" />
      {image && <div className="ds-coachmark__image">{image}</div>}
      <div className="ds-coachmark__content">
        <p className="ds-coachmark__title">{title}</p>
        <p className="ds-coachmark__body">{body}</p>
        <div className="ds-coachmark__footer">
          {step && <span className="ds-coachmark__step">{step}</span>}
          <div className="ds-coachmark__actions">
            {onSkip && (
              <button type="button" className="ds-coachmark__skip" onClick={onSkip}>
                Skip
              </button>
            )}
            {onNext && (
              <button type="button" className="ds-coachmark__next" onClick={onNext}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
