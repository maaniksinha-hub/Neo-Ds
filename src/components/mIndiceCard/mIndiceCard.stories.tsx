import type { Meta, StoryObj } from '@storybook/react-vite';
import { MIndiceCard } from './mIndiceCard';

const meta = {
  title: 'Components/mIndiceCard',
  component: MIndiceCard,
  tags: ['autodocs'],
} satisfies Meta<typeof MIndiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = {
  args: {
    name: 'NIFTY 50',
    value: '24,812.30',
    changeValue: '+142.10',
    changePercent: '0.58%',
    direction: 'up',
    chartValues: [24600, 24650, 24630, 24700, 24750, 24790, 24812],
  },
};

export const Down: Story = {
  args: {
    name: 'BANK NIFTY',
    value: '51,203.75',
    changeValue: '-88.40',
    changePercent: '0.17%',
    direction: 'down',
    chartValues: [51400, 51380, 51320, 51280, 51250, 51220, 51203],
  },
};
