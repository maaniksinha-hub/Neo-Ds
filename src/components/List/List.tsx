import type { ReactNode } from 'react';

export interface ListProps {
  children: ReactNode;
  className?: string;
}

export function List({ children, className }: ListProps) {
  return <div className={['ds-list', className].filter(Boolean).join(' ')}>{children}</div>;
}
