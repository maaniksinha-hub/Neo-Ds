import './wTaskBar.css';

export interface WTaskBarProps {
  time?: string;
  className?: string;
}

function AppIcon() {
  return <span className="ds-taskbar__appicon" />;
}

/**
 * USE: os-taskbar, system-bar, desktop-frame
 * WHEN: Adding OS taskbar context to web mockups for presentation. Utility component — not for product UI.
 * PLATFORM: Web
 */
export function WTaskBar({ time = '9:41 AM', className }: WTaskBarProps) {
  return (
    <div className={['ds-taskbar', className].filter(Boolean).join(' ')}>
      <div className="ds-taskbar__apps">
        <AppIcon />
        <AppIcon />
        <AppIcon />
      </div>
      <span className="ds-taskbar__time">{time}</span>
    </div>
  );
}
