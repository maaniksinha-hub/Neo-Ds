import './mStatusBar.css';

export type MStatusBarTheme = 'neutral' | 'black';

export interface MStatusBarProps {
  time?: string;
  theme?: MStatusBarTheme;
  className?: string;
}

function SignalIcon() {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" aria-hidden="true">
      <rect x="0" y="8" width="3" height="4" rx="0.5" />
      <rect x="5" y="5" width="3" height="7" rx="0.5" />
      <rect x="10" y="2" width="3" height="10" rx="0.5" />
      <rect x="15" y="0" width="3" height="12" rx="0.5" />
    </svg>
  );
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      <path
        d="M1 4a10 10 0 0114 0M3.5 6.8a6.5 6.5 0 019 0M6.2 9.5a2.8 2.8 0 013.6 0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BatteryIcon() {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="20" height="11" rx="2.5" stroke="currentColor" />
      <rect x="2" y="2" width="17" height="8" rx="1.5" fill="currentColor" />
      <rect x="21.5" y="4" width="2" height="4" rx="1" fill="currentColor" />
    </svg>
  );
}

/**
 * USE: status-bar, system-bar, ios-status-bar
 * WHEN: Top of every mobile screen to show system status (time, battery, signal). Base layer only — always used within mTopNav.
 * PLATFORM: Mobile
 */
export function MStatusBar({ time = '9:41', theme = 'neutral', className }: MStatusBarProps) {
  return (
    <div className={['ds-statusbar', `ds-statusbar--${theme}`, className].filter(Boolean).join(' ')}>
      <span className="ds-statusbar__time">{time}</span>
      <span className="ds-statusbar__icons">
        <SignalIcon />
        <WifiIcon />
        <BatteryIcon />
      </span>
    </div>
  );
}
