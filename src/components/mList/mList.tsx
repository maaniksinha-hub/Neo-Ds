import type { ReactNode } from 'react';

export interface MListProps {
  children: ReactNode;
  className?: string;
}

export function MList({ children, className }: MListProps) {
  return <div className={['ds-list', className].filter(Boolean).join(' ')}>{children}</div>;
}
