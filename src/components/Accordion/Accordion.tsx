import { useState, type ReactNode } from 'react';
import './Accordion.css';

export type AccordionEmphasis = 'plain' | 'contained';
export type AccordionSize = 'small' | 'big';

export interface AccordionProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  emphasis?: AccordionEmphasis;
  /** "big" is a section-level accordion for grouping primary content areas; "small" (default) suits body-level content like FAQs */
  size?: AccordionSize;
  className?: string;
}

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Accordion({ title, children, defaultExpanded = false, emphasis = 'plain', size = 'small', className }: AccordionProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const classes = [
    'ds-accordion',
    `ds-accordion--${emphasis}`,
    `ds-accordion--${size}`,
    expanded && 'ds-accordion--expanded',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <button type="button" className="ds-accordion__header" onClick={() => setExpanded((v) => !v)} aria-expanded={expanded}>
        <span className="ds-accordion__title">{title}</span>
        <span className="ds-accordion__chevron">
          <ChevronDown />
        </span>
      </button>
      {expanded && <div className="ds-accordion__content">{children}</div>}
    </div>
  );
}
