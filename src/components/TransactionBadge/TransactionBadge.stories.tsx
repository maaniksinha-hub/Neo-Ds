import type { Meta, StoryObj } from '@storybook/react-vite';
import { TransactionBadge } from './TransactionBadge';

const meta = {
  title: 'Components/TransactionBadge',
  component: TransactionBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof TransactionBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypes: Story = {
  args: { type: 'deposit' },
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <TransactionBadge type="deposit" />
      <TransactionBadge type="withdrawal" />
      <TransactionBadge type="transfer" />
    </div>
  ),
};
