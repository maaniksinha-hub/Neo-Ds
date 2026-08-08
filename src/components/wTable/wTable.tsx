import type { ReactNode } from 'react';
import './wTable.css';

export type WTableAlign = 'left' | 'right';
export type SortDirection = 'none' | 'ascending' | 'descending';

export interface WTableColumn<T> {
  key: string;
  header: string;
  align?: WTableAlign;
  sortable?: boolean;
  render: (row: T) => ReactNode;
}

export interface WTableProps<T> {
  columns: WTableColumn<T>[];
  rows: T[];
  sortKey?: string;
  sortDirection?: SortDirection;
  onSort?: (key: string) => void;
  rowKey: (row: T) => string;
  className?: string;
}

function SortIcon({ direction }: { direction: SortDirection }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" className={`ds-table__sort-icon ds-table__sort-icon--${direction}`}>
      <path d="M8 3v10M4.5 6.5L8 3l3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WTable<T>({ columns, rows, sortKey, sortDirection = 'none', onSort, rowKey, className }: WTableProps<T>) {
  return (
    <table className={['ds-table', className].filter(Boolean).join(' ')}>
      <thead>
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className={`ds-table__header ds-table__header--${col.align ?? 'left'}`}
              onClick={col.sortable && onSort ? () => onSort(col.key) : undefined}
              style={col.sortable ? { cursor: 'pointer' } : undefined}
            >
              <span className="ds-table__header-inner">
                {col.header}
                {col.sortable && <SortIcon direction={sortKey === col.key ? sortDirection : 'none'} />}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={rowKey(row)} className="ds-table__row">
            {columns.map((col) => (
              <td key={col.key} className={`ds-table__cell ds-table__cell--${col.align ?? 'left'}`}>
                {col.render(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
