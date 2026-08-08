import type { Meta, StoryObj } from '@storybook/react-vite';
import { MNews } from './mNews';

const meta = {
  title: 'Components/mNews',
  component: MNews,
  tags: ['autodocs'],
} satisfies Meta<typeof MNews>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headline: 'RBI holds repo rate steady at 6.5% for fourth straight meeting',
    source: 'Economic Times',
    timestamp: '2h ago',
    onClick: () => {},
  },
};

export const WithThumbnail: Story = {
  args: {
    headline: 'Reliance Industries Q2 results beat estimates on retail, telecom growth',
    source: 'Moneycontrol',
    timestamp: '45m ago',
    thumbnail: <div style={{ width: '100%', height: '100%', background: 'var(--fill-accent1-tertiary)' }} />,
    onClick: () => {},
  },
};
