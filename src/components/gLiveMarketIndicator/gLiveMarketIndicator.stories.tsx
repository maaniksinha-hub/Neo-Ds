import type { Meta, StoryObj } from '@storybook/react-vite';
import { GLiveMarketIndicator } from './gLiveMarketIndicator';

const meta = {
  title: 'Components/gLiveMarketIndicator',
  component: GLiveMarketIndicator,
  tags: ['autodocs'],
} satisfies Meta<typeof GLiveMarketIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllStates: Story = {
  args: { state: 'live' },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <GLiveMarketIndicator state="live" />
      <GLiveMarketIndicator state="pre-market" />
      <GLiveMarketIndicator state="closed" />
    </div>
  ),
};
