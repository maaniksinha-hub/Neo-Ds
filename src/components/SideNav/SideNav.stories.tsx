import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { SideNav } from './SideNav';

const meta = {
  title: 'Components/SideNav',
  component: SideNav,
  tags: ['autodocs'],
} satisfies Meta<typeof SideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

function HomeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 9l7-6 7 6v7a1 1 0 01-1 1h-4v-5H8v5H4a1 1 0 01-1-1V9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const items = [
  { key: 'home', label: 'Home', icon: <HomeIcon /> },
  { key: 'portfolio', label: 'Portfolio', icon: <HomeIcon /> },
  { key: 'orders', label: 'Orders', icon: <HomeIcon />, badge: '3' },
  { key: 'watchlist', label: 'Watchlist', icon: <HomeIcon /> },
  { key: 'settings', label: 'Settings', icon: <HomeIcon />, disabled: true },
];

export const Expanded: Story = {
  args: { items, activeKey: 'home', onChange: () => {} },
  render: () => {
    const [active, setActive] = useState('home');
    return <SideNav items={items} activeKey={active} onChange={setActive} />;
  },
};

export const Collapsed: Story = {
  args: { items, activeKey: 'home', onChange: () => {}, collapsed: true },
  render: () => {
    const [active, setActive] = useState('home');
    return <SideNav items={items} activeKey={active} onChange={setActive} collapsed />;
  },
};
