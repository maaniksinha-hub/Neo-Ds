import { useState } from 'react';
import './mBaseInfoCard.css';

export interface MBaseInfoCardRow {
  label: string;
  value: string;
}

export interface MBaseInfoCardProps {
  header?: string;
  rows: MBaseInfoCardRow[];
  expandable?: boolean;
  defaultExpanded?: boolean;
  className?: string;
}

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ transform: expanded ? 'rotate(180deg)' : undefined, transition: 'transform 0.15s ease' }}
      aria-hidden="true"
    >
      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MBaseInfoCard({ header, rows, expandable = false, defaultExpanded = true, className }: MBaseInfoCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  const visibleRows = expandable && !expanded ? rows.slice(0, 1) : rows;

  return (
    <div className={['ds-infocard', className].filter(Boolean).join(' ')}>
      {header && (
        <div className="ds-infocard__header">
          <span className="ds-infocard__headertext">{header}</span>
          {expandable && (
            <button type="button" className="ds-infocard__toggle" onClick={() => setExpanded((v) => !v)} aria-label="Toggle details">
              <ChevronIcon expanded={expanded} />
            </button>
          )}
        </div>
      )}
      <dl className="ds-infocard__rows">
        {visibleRows.map((row) => (
          <div key={row.label} className="ds-infocard__row">
            <dt className="ds-infocard__label">{row.label}</dt>
            <dd className="ds-infocard__value">{row.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
