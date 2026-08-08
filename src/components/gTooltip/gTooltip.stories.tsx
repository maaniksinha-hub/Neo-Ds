import type { Meta, StoryObj } from '@storybook/react-vite';
import { GTooltip } from './gTooltip';

const meta = {
  title: 'Components/gTooltip',
  component: GTooltip,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'select', options: ['top', 'bottom', 'left', 'right', 'none'] },
  },
} satisfies Meta<typeof GTooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bottom: Story = { args: { children: 'Tooltip', position: 'bottom' } };
export const Top: Story = { args: { children: 'Tooltip', position: 'top' } };
export const NoArrow: Story = { args: { children: 'Tooltip', position: 'none' } };
export const LowEmphasis: Story = { args: { children: 'Additional context', position: 'bottom', emphasis: 'low' } };
