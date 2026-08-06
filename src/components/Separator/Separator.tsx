import './Separator.css';

export type SeparatorStyle = 'solid' | 'dashed';
export type SeparatorEmphasis = 'default' | 'low-emp';

export interface SeparatorProps {
  type?: SeparatorStyle;
  emphasis?: SeparatorEmphasis;
  className?: string;
}

export function Separator({ type = 'solid', emphasis = 'default', className }: SeparatorProps) {
  const classes = ['ds-separator', `ds-separator--${type}`, `ds-separator--${emphasis}`, className]
    .filter(Boolean)
    .join(' ');
  return <hr className={classes} />;
}
