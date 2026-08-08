import type { Meta, StoryObj } from '@storybook/react-vite';
import { GStatusTimeline } from './gStatusTimeline';

const meta = {
  title: 'Components/GStatusTimeline',
  component: GStatusTimeline,
  tags: ['autodocs'],
} satisfies Meta<typeof GStatusTimeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Timeline: Story = {
  args: {
    steps: [
      { label: 'Order placed', supportingText: '12 Jan, 10:04 AM', status: 'completed' },
      { label: 'Payment verified', supportingText: '12 Jan, 10:06 AM', status: 'in-process' },
      { label: 'Shares credited', status: 'yet-to-start' },
    ],
  },
};

export const WithFailure: Story = {
  args: {
    steps: [
      { label: 'Order placed', status: 'completed' },
      { label: 'Payment failed', supportingText: 'Insufficient funds', status: 'failed' },
    ],
  },
};
