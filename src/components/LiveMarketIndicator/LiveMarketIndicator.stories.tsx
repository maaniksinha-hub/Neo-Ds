import type { Meta, StoryObj } from '@storybook/react-vite';
import { LiveMarketIndicator } from './LiveMarketIndicator';

const meta = {
  title: 'Components/LiveMarketIndicator',
  component: LiveMarketIndicator,
  tags: ['autodocs'],
} satisfies Meta<typeof LiveMarketIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  args: { state: 'live' },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <LiveMarketIndicator state="live" />
      <LiveMarketIndicator state="pre-market" />
      <LiveMarketIndicator state="closed" />
    </div>
  ),
};
