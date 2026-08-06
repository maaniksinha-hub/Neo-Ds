import type { Meta, StoryObj } from '@storybook/react-vite';
import { BalanceRow } from './BalanceRow';

const meta = {
  title: 'Components/BalanceRow',
  component: BalanceRow,
  tags: ['autodocs'],
} satisfies Meta<typeof BalanceRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: { label: 'Available margin', value: '₹1,24,500' },
  render: () => (
    <div style={{ width: 320 }}>
      <BalanceRow label="Available margin" value="₹1,24,500" />
      <BalanceRow label="Holdings value" value="₹5,82,300" />
      <BalanceRow label="Today's P&L" value="₹4,820.50" secondaryValue="+2.3%" direction="up" />
    </div>
  ),
};
