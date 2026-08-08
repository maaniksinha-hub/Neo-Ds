import type { Meta, StoryObj } from '@storybook/react-vite';
import { MBalanceList } from './mBalanceList';

const meta = {
  title: 'Components/mBalanceList',
  component: MBalanceList,
  tags: ['autodocs'],
} satisfies Meta<typeof MBalanceList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MList: Story = {
  args: { label: 'Available margin', value: '₹1,24,500' },
  render: () => (
    <div style={{ width: 320 }}>
      <MBalanceList label="Available margin" value="₹1,24,500" />
      <MBalanceList label="Holdings value" value="₹5,82,300" />
      <MBalanceList label="Today's P&L" value="₹4,820.50" secondaryValue="+2.3%" direction="up" />
    </div>
  ),
};
