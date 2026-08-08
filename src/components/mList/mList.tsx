import type { ReactNode } from 'react';

export interface MListProps {
  children: ReactNode;
  className?: string;
}

/**
 * USE: list-item, list-row, settings-row, detail-row
 * WHEN: Standard list items — settings, menus, detail key-value rows, and general-purpose vertical lists.
 * PLATFORM: Mobile
 * VARIANTS: Leading (icon/avatar/none), trailing (text/icon/switch/chevron), with/without subtitle and divider.
 * INSTEAD-OF: Use mScripList for stock-specific lists, mBalanceList for balance displays.
 */
export function MList({ children, className }: MListProps) {
  return <div className={['ds-list', className].filter(Boolean).join(' ')}>{children}</div>;
}
