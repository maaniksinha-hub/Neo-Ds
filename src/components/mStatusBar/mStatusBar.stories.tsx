import type { Meta, StoryObj } from '@storybook/react-vite';
import { MStatusBar } from './mStatusBar';

const meta = {
  title: 'Components/mStatusBar',
  component: MStatusBar,
  tags: ['autodocs'],
} satisfies Meta<typeof MStatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { time: '9:41', theme: 'neutral' } };
export const Black: Story = { args: { time: '9:41', theme: 'black' } };
