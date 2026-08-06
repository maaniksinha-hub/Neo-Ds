import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Table, type SortDirection } from './Table';

interface Row {
  name: string;
  ltp: string;
  change: string;
}

const meta = {
  title: 'Components/Table',
  component: Table<Row>,
  tags: ['autodocs'],
} satisfies Meta<typeof Table<Row>>;

export default meta;
type Story = StoryObj<typeof meta>;

const rows: Row[] = [
  { name: 'Tata Steel', ltp: '168.00', change: '-1.25%' },
  { name: 'HDFC Bank', ltp: '1,487.00', change: '-0.12%' },
  { name: 'Reliance', ltp: '2,940.50', change: '+0.84%' },
];

export const Default: Story = {
  args: {
    columns: [],
    rows: [],
    rowKey: () => '',
  },
  render: () => {
    const [sortKey, setSortKey] = useState('ltp');
    const [sortDirection, setSortDirection] = useState<SortDirection>('descending');
    return (
      <Table<Row>
        rowKey={(r) => r.name}
        rows={rows}
        sortKey={sortKey}
        sortDirection={sortDirection}
        onSort={(key) => {
          setSortKey(key);
          setSortDirection(sortDirection === 'descending' ? 'ascending' : 'descending');
        }}
        columns={[
          { key: 'name', header: 'Name', render: (r) => r.name },
          { key: 'ltp', header: 'LTP', align: 'right', sortable: true, render: (r) => r.ltp },
          { key: 'change', header: '% Change', align: 'right', sortable: true, render: (r) => r.change },
        ]}
      />
    );
  },
};
