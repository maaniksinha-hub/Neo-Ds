import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small', 'xsmall'] },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = { args: { label: 'Label' } };
export const Checked: Story = { args: { label: 'Label', defaultChecked: true } };
export const Indeterminate: Story = { args: { label: 'Label', indeterminate: true } };
export const Disabled: Story = { args: { label: 'Label', disabled: true } };
