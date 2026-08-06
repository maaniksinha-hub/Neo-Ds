import './TaskBar.css';

export interface TaskBarProps {
  time?: string;
  className?: string;
}

function AppIcon() {
  return <span className="ds-taskbar__appicon" />;
}

export function TaskBar({ time = '9:41 AM', className }: TaskBarProps) {
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
