import type { Meta, StoryObj } from '@storybook/react-vite';
import { IconCardWidget } from './IconCardWidget';

const meta = {
  title: 'Components/IconCardWidget',
  component: IconCardWidget,
  tags: ['autodocs'],
} satisfies Meta<typeof IconCardWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

function BoltIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

export const Default: Story = {
  args: { icon: <BoltIcon />, label: 'Quick trade', onClick: () => {} },
};

export const Grid: Story = {
  args: { icon: <BoltIcon />, label: 'Quick trade' },
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <IconCardWidget icon={<BoltIcon />} label="Quick trade" onClick={() => {}} />
      <IconCardWidget icon={<BoltIcon />} label="IPO" onClick={() => {}} />
      <IconCardWidget icon={<BoltIcon />} label="Mutual funds" onClick={() => {}} />
    </div>
  ),
};
