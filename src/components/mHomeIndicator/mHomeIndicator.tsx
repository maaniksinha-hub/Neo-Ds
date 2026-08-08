import './mHomeIndicator.css';

export type MHomeIndicatorTheme = 'neutral' | 'black';

export interface MHomeIndicatorProps {
  theme?: MHomeIndicatorTheme;
  className?: string;
}

/**
 * USE: home-indicator, swipe-bar, ios-home-bar
 * WHEN: iOS home indicator bar at the bottom of screens — required on iPhone X and later for gesture navigation context.
 * PLATFORM: Mobile
 * VARIANTS: Color (light/dark) matching the screen background.
 */
export function MHomeIndicator({ theme = 'neutral', className }: MHomeIndicatorProps) {
  return (
    <div className={['ds-homeindicator', `ds-homeindicator--${theme}`, className].filter(Boolean).join(' ')}>
      <span className="ds-homeindicator__bar" />
    </div>
  );
}
