import './HomeIndicator.css';

export type HomeIndicatorTheme = 'neutral' | 'black';

export interface HomeIndicatorProps {
  theme?: HomeIndicatorTheme;
  className?: string;
}

export function HomeIndicator({ theme = 'neutral', className }: HomeIndicatorProps) {
  return (
    <div className={['ds-homeindicator', `ds-homeindicator--${theme}`, className].filter(Boolean).join(' ')}>
      <span className="ds-homeindicator__bar" />
    </div>
  );
}
