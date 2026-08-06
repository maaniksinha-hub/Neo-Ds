import type { Meta, StoryObj } from '@storybook/react-vite';
import { InfoCard } from './InfoCard';

const meta = {
  title: 'Components/InfoCard',
  component: InfoCard,
  tags: ['autodocs'],
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    header: 'Transaction summary',
    rows: [
      { label: 'Amount', value: '₹50,000' },
      { label: 'Fee', value: '₹0' },
      { label: 'Reference', value: 'TXN9284710' },
    ],
  },
};

export const Expandable: Story = {
  args: {
    header: 'Order breakdown',
    expandable: true,
    defaultExpanded: false,
    rows: [
      { label: 'Brokerage', value: '₹20.00' },
      { label: 'STT', value: '₹5.90' },
      { label: 'GST', value: '₹3.60' },
      { label: 'Stamp duty', value: '₹1.50' },
    ],
  },
};
