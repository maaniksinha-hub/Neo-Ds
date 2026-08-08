import type { ReactNode } from 'react';
import type { MAccordionSmallSize } from './mAccordionSmall';
import './mAccordionContainerSmall.css';

export interface MAccordionContainerSmallProps {
  children: ReactNode;
  size?: MAccordionSmallSize;
  className?: string;
}

/**
 * USE: body-accordion-container, faq-container, contained-faq-item
 * WHEN: Body-level accordion within a card/container — FAQs, supporting details with contained styling and low visual emphasis.
 * PLATFORM: Mobile
 * VARIANTS: State (collapsed/expanded).
 * INSTEAD-OF: Use mAccordionSmall for borderless body accordions, mAccordionContainerBig for section-level contained accordions.
 */
export function MAccordionContainerSmall({ children, size = 'small', className }: MAccordionContainerSmallProps) {
  return <div className={['ds-accordiongroup', `ds-accordiongroup--${size}`, className].filter(Boolean).join(' ')}>{children}</div>;
}
