import type { Meta, StoryObj } from '@storybook/react-vite';
import { WMenuPopup } from './wMenuPopup';

const meta = {
  title: 'Components/wMenuPopup',
  component: WMenuPopup,
  tags: ['autodocs'],
} satisfies Meta<typeof WMenuPopup>;

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
