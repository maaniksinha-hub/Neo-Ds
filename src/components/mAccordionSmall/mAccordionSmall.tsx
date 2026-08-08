import { useState, type ReactNode } from 'react';
import './mAccordionSmall.css';

export type MAccordionSmallEmphasis = 'plain' | 'contained';
export type MAccordionSmallSize = 'small' | 'big';

export interface MAccordionSmallProps {
  title: string;
  children: ReactNode;
  defaultExpanded?: boolean;
  emphasis?: MAccordionSmallEmphasis;
  /** "big" is a section-level accordion for grouping primary content areas; "small" (default) suits body-level content like FAQs */
  size?: MAccordionSmallSize;
  className?: string;
}

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * USE: collapsible-section, expandable-details, FAQ-item
 * WHEN: Content that can be expanded/collapsed to save vertical space
 * VARIANTS: State: &quot;Collapsed&quot;|&quot;Expanded&quot;
 * TEXT: Title via child text nodes
 */
export function MAccordionSmall({ title, children, defaultExpanded = false, emphasis = 'plain', size = 'small', className }: MAccordionSmallProps) {
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
