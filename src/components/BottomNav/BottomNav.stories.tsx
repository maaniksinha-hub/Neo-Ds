import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomNav } from './BottomNav';

const meta = {
  title: 'Components/BottomNav',
  component: BottomNav,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomNav>;

export default meta;
type Story = StoryObj<typeof meta>;

function DotIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const items = [
  { value: 'home', label: 'Home', icon: <DotIcon /> },
  { value: 'watchlist', label: 'Watchlist', icon: <DotIcon /> },
  { value: 'portfolio', label: 'Portfolio', icon: <DotIcon /> },
  { value: 'orders', label: 'Orders', icon: <DotIcon /> },
  { value: 'profile', label: 'Profile', icon: <DotIcon /> },
];

export const Default: Story = {
  args: { items, value: 'home', onChange: () => {} },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <BottomNav {...args} value={value} onChange={setValue} />;
  },
};
