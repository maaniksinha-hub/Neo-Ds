import type { ReactNode } from 'react';
import type { AccordionSize } from './Accordion';
import './AccordionGroup.css';

export interface AccordionGroupProps {
  children: ReactNode;
  size?: AccordionSize;
  className?: string;
}

export function AccordionGroup({ children, size = 'small', className }: AccordionGroupProps) {
  return <div className={['ds-accordiongroup', `ds-accordiongroup--${size}`, className].filter(Boolean).join(' ')}>{children}</div>;
}
