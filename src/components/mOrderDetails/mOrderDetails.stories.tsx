import type { Meta, StoryObj } from '@storybook/react-vite';
import { MOrderDetails } from './mOrderDetails';

const meta = {
  title: 'Components/mOrderDetails',
  component: MOrderDetails,
  tags: ['autodocs'],
} satisfies Meta<typeof MOrderDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Executed: Story = {
  args: {
    scripName: 'Reliance Industries',
    orderType: 'Buy · Delivery · 10 qty',
    status: 'completed',
    statusLabel: 'Executed',
    rows: [
      { label: 'Order ID', value: '#OD48291' },
      { label: 'Price', value: '₹2,940.50' },
      { label: 'Quantity', value: '10' },
      { label: 'Order value', value: '₹29,405.00' },
      { label: 'Placed at', value: '10:42:18 AM' },
      { label: 'Executed at', value: '10:42:21 AM' },
    ],
  },
};

export const Pending: Story = {
  args: {
    scripName: 'TCS',
    orderType: 'Sell · Intraday · 5 qty',
    status: 'in-process',
    statusLabel: 'Pending',
    rows: [
      { label: 'Order ID', value: '#OD48302' },
      { label: 'Trigger price', value: '₹3,850.00' },
      { label: 'Placed at', value: '11:05:00 AM' },
    ],
  },
};
