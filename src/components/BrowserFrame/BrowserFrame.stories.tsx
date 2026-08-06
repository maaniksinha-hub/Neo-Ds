import type { Meta, StoryObj } from '@storybook/react-vite';
import { BrowserFrame } from './BrowserFrame';

const meta = {
  title: 'Components/BrowserFrame',
  component: BrowserFrame,
  tags: ['autodocs'],
} satisfies Meta<typeof BrowserFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    url: 'app.neo.com/portfolio',
    children: (
      <div style={{ padding: 24, fontFamily: 'var(--font-body)', height: 160 }}>Page content goes here</div>
    ),
  },
};
