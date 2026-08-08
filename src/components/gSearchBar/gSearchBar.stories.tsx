import type { Meta, StoryObj } from '@storybook/react-vite';
import { GSearchBar } from './gSearchBar';

const meta = {
  title: 'Components/gSearchBar',
  component: GSearchBar,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['32px', '44px'] },
  },
} satisfies Meta<typeof GSearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: '32px' } };
export const Disabled: Story = { args: { disabled: true } };
