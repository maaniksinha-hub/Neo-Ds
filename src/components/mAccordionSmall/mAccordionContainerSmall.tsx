import type { ReactNode } from 'react';
import type { MAccordionSmallSize } from './mAccordionSmall';
import './mAccordionContainerSmall.css';

export interface MAccordionContainerSmallProps {
  children: ReactNode;
  size?: MAccordionSmallSize;
  className?: string;
}

export function MAccordionContainerSmall({ children, size = 'small', className }: MAccordionContainerSmallProps) {
  return <div className={['ds-accordiongroup', `ds-accordiongroup--${size}`, className].filter(Boolean).join(' ')}>{children}</div>;
}
