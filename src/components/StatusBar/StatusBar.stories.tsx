import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatusBar } from './StatusBar';

const meta = {
  title: 'Components/StatusBar',
  component: StatusBar,
  tags: ['autodocs'],
} satisfies Meta<typeof StatusBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { time: '9:41', theme: 'neutral' } };
export const Black: Story = { args: { time: '9:41', theme: 'black' } };
