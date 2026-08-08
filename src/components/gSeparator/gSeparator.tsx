import './gSeparator.css';

export type GSeparatorStyle = 'solid' | 'dashed';
export type GSeparatorEmphasis = 'default' | 'low-emp';

export interface GSeparatorProps {
  type?: GSeparatorStyle;
  emphasis?: GSeparatorEmphasis;
  className?: string;
}

export function GSeparator({ type = 'solid', emphasis = 'default', className }: GSeparatorProps) {
  const classes = ['ds-separator', `ds-separator--${type}`, `ds-separator--${emphasis}`, className]
    .filter(Boolean)
    .join(' ');
  return <hr className={classes} />;
}
