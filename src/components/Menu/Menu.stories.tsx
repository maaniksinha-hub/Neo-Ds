import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

const meta = {
  title: 'Components/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groups: [
      { title: 'Order', items: [{ label: 'Buy' }, { label: 'Sell' }] },
      { title: 'Manage', items: [{ label: 'Edit alert' }, { label: 'Remove from watchlist', destructive: true }] },
    ],
  },
};
