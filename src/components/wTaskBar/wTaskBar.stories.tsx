import type { Meta, StoryObj } from '@storybook/react-vite';
import { WTaskBar } from './wTaskBar';

const meta = {
  title: 'Components/wTaskBar',
  component: WTaskBar,
  tags: ['autodocs'],
} satisfies Meta<typeof WTaskBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { time: '9:41 AM' } };
