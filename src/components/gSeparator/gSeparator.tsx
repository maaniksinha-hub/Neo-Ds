import './gSeparator.css';

export type GSeparatorStyle = 'solid' | 'dashed';
export type GSeparatorEmphasis = 'default' | 'low-emp';

export interface GSeparatorProps {
  type?: GSeparatorStyle;
  emphasis?: GSeparatorEmphasis;
  className?: string;
}

/**
 * USE: separator, divider, horizontal-rule, content-divider
 * WHEN: Visual separation between content sections — between list items, within cards, between page sections.
 * PLATFORM: Global
 * VARIANTS: Style (solid/inset/full-bleed), thickness, with/without label.
 */
export function GSeparator({ type = 'solid', emphasis = 'default', className }: GSeparatorProps) {
  const classes = ['ds-separator', `ds-separator--${type}`, `ds-separator--${emphasis}`, className]
    .filter(Boolean)
    .join(' ');
  return <hr className={classes} />;
}
