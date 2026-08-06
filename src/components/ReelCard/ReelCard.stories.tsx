import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReelCard } from './ReelCard';

const meta = {
  title: 'Components/ReelCard',
  component: ReelCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ReelCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const thumbnail = <div style={{ background: 'var(--fill-accent1-tertiary)' }} />;

export const Default: Story = {
  args: { thumbnail, title: 'What is SIP and how does it work?', onClick: () => {} },
};

export const WithProgress: Story = {
  args: { thumbnail, title: '3 signs a stock is overvalued', progress: 45, onClick: () => {} },
};
