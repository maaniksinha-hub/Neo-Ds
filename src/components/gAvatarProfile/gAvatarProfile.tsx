import './gAvatarProfile.css';

export type GAvatarProfileSize = '32px' | '40px';
export type GAvatarProfileShape = 'circle' | 'square';

export interface GAvatarProfileProps {
  initials?: string;
  imageSrc?: string;
  alt?: string;
  size?: GAvatarProfileSize;
  /** Company/brand avatars render with a square-rounded shape instead of a circle */
  shape?: GAvatarProfileShape;
  className?: string;
}

/**
 * USE: user-avatar, profile-picture, initials-circle, account-avatar
 * WHEN: Displaying user identity — profile photo or initials fallback. Used in navigation, account sections, and social features.
 * PLATFORM: Global
 * VARIANTS: Type (photo/initials), Size (S/M/L/XL).
 */
export function GAvatarProfile({ initials = 'NR', imageSrc, alt = '', size = '40px', shape = 'circle', className }: GAvatarProfileProps) {
  const classes = ['ds-avatar', `ds-avatar--${size}`, `ds-avatar--${shape}`, className].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {imageSrc ? <img className="ds-avatar__image" src={imageSrc} alt={alt} /> : <span className="ds-avatar__initials">{initials}</span>}
    </span>
  );
}
