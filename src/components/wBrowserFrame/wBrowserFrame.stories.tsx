import type { Meta, StoryObj } from '@storybook/react-vite';
import { WBrowserFrame } from './wBrowserFrame';

const meta = {
  title: 'Components/wBrowserFrame',
  component: WBrowserFrame,
  tags: ['autodocs'],
} satisfies Meta<typeof WBrowserFrame>;

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
