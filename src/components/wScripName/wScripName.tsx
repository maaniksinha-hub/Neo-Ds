import './wScripName.css';

export type WScripNameSize = 'small' | 'medium' | 'large';

export interface WScripNameProps {
  name: string;
  exchange?: string;
  sector?: string;
  size?: WScripNameSize;
  onClick?: () => void;
  className?: string;
}

export function WScripName({ name, exchange, sector, size = 'medium', onClick, className }: WScripNameProps) {
  const classes = ['ds-scripname', `ds-scripname--${size}`, className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="ds-scripname__name">{name}</span>
      {exchange && <span className="ds-scripname__exchange">{exchange}</span>}
      {sector && <span className="ds-scripname__sector">{sector}</span>}
    </button>
  );
}
