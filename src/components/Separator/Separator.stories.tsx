import type { Meta, StoryObj } from '@storybook/react-vite';
import { Separator } from './Separator';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['solid', 'dashed'] },
    emphasis: { control: 'select', options: ['default', 'low-emp'] },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { type: 'solid', emphasis: 'default' } };
export const Dashed: Story = { args: { type: 'dashed', emphasis: 'default' } };
export const LowEmphasis: Story = { args: { type: 'solid', emphasis: 'low-emp' } };
