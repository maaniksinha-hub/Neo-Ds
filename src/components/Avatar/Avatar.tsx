import './Avatar.css';

export type AvatarSize = '32px' | '40px';
export type AvatarShape = 'circle' | 'square';

export interface AvatarProps {
  initials?: string;
  imageSrc?: string;
  alt?: string;
  size?: AvatarSize;
  /** Company/brand avatars render with a square-rounded shape instead of a circle */
  shape?: AvatarShape;
  className?: string;
}

export function Avatar({ initials = 'NR', imageSrc, alt = '', size = '40px', shape = 'circle', className }: AvatarProps) {
  const classes = ['ds-avatar', `ds-avatar--${size}`, `ds-avatar--${shape}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {imageSrc ? <img className="ds-avatar__image" src={imageSrc} alt={alt} /> : <span className="ds-avatar__initials">{initials}</span>}
    </span>
  );
}
