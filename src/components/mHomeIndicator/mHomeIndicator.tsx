import './mHomeIndicator.css';

export type MHomeIndicatorTheme = 'neutral' | 'black';

export interface MHomeIndicatorProps {
  theme?: MHomeIndicatorTheme;
  className?: string;
}

export function MHomeIndicator({ theme = 'neutral', className }: MHomeIndicatorProps) {
  return (
    <div className={['ds-homeindicator', `ds-homeindicator--${theme}`, className].filter(Boolean).join(' ')}>
      <span className="ds-homeindicator__bar" />
    </div>
  );
}
