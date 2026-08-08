import type { Meta, StoryObj } from '@storybook/react-vite';
import { GCheckbox } from './gCheckbox';

const meta = {
  title: 'Components/gCheckbox',
  component: GCheckbox,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small', 'xsmall'] },
  },
} satisfies Meta<typeof GCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = { args: { label: 'Label' } };
export const Checked: Story = { args: { label: 'Label', defaultChecked: true } };
export const Indeterminate: Story = { args: { label: 'Label', indeterminate: true } };
export const Disabled: Story = { args: { label: 'Label', disabled: true } };
