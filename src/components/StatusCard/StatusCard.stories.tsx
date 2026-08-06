import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusCard } from './StatusCard';

const meta = {
  title: 'Components/StatusCard',
  component: StatusCard,
  tags: ['autodocs'],
} satisfies Meta<typeof StatusCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    status: 'success',
    title: 'Buy order — Reliance Industries',
    subtitle: '10 shares · ₹2,940.50',
    info: [
      { label: 'Order ID', value: '#OD48291' },
      { label: 'Time', value: '10:42 AM' },
    ],
    timeline: [
      { label: 'Order placed', status: 'completed' },
      { label: 'Order confirmed', status: 'completed' },
      { label: 'Executed', status: 'completed' },
    ],
  },
};

export const Pending: Story = {
  args: {
    status: 'pending',
    title: 'Withdrawal request',
    subtitle: '₹50,000',
    timeline: [
      { label: 'Requested', status: 'completed' },
      { label: 'Processing', status: 'in-process' },
      { label: 'Credited', status: 'yet-to-start' },
    ],
  },
};

export const Failed: Story = {
  args: {
    status: 'failed',
    title: 'Sell order — TCS',
    subtitle: '5 shares failed to execute',
    info: [{ label: 'Reason', value: 'Insufficient holdings' }],
  },
};
