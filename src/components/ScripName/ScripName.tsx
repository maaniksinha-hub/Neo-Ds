import './ScripName.css';

export type ScripNameSize = 'small' | 'medium' | 'large';

export interface ScripNameProps {
  name: string;
  exchange?: string;
  sector?: string;
  size?: ScripNameSize;
  onClick?: () => void;
  className?: string;
}

export function ScripName({ name, exchange, sector, size = 'medium', onClick, className }: ScripNameProps) {
  const classes = ['ds-scripname', `ds-scripname--${size}`, className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} onClick={onClick}>
      <span className="ds-scripname__name">{name}</span>
      {exchange && <span className="ds-scripname__exchange">{exchange}</span>}
      {sector && <span className="ds-scripname__sector">{sector}</span>}
    </button>
  );
}
