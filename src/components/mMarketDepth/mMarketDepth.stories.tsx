import type { Meta, StoryObj } from '@storybook/react-vite';
import { MMarketDepth } from './mMarketDepth';

const meta = {
  title: 'Components/mMarketDepth',
  component: MMarketDepth,
  tags: ['autodocs'],
} satisfies Meta<typeof MMarketDepth>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    bids: [
      { price: '2,940.00', quantity: '1,200' },
      { price: '2,939.50', quantity: '850' },
      { price: '2,939.00', quantity: '2,400' },
      { price: '2,938.50', quantity: '300' },
      { price: '2,938.00', quantity: '600' },
    ],
    asks: [
      { price: '2,940.50', quantity: '900' },
      { price: '2,941.00', quantity: '1,600' },
      { price: '2,941.50', quantity: '400' },
      { price: '2,942.00', quantity: '2,100' },
      { price: '2,942.50', quantity: '750' },
    ],
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <MMarketDepth {...args} />
    </div>
  ),
};
