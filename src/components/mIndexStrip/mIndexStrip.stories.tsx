import type { Meta, StoryObj } from '@storybook/react-vite';
import { MIndexStrip } from './mIndexStrip';

const meta = {
  title: 'Components/mIndexStrip',
  component: MIndexStrip,
  tags: ['autodocs'],
} satisfies Meta<typeof MIndexStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { name: 'NIFTY 50', value: '24,812.30', changeValue: '+142.10', changePercent: '0.58%', direction: 'up' },
      { name: 'SENSEX', value: '81,559.54', changeValue: '+468.20', changePercent: '0.58%', direction: 'up' },
      { name: 'BANK NIFTY', value: '51,203.75', changeValue: '-88.40', changePercent: '0.17%', direction: 'down' },
    ],
  },
};
