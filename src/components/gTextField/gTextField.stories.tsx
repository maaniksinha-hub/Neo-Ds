import type { Meta, StoryObj } from '@storybook/react-vite';
import { GTextField } from './gTextField';

const meta = {
  title: 'Components/gTextField',
  component: GTextField,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['48px', '56px'] },
    status: { control: 'select', options: ['default', 'error', 'success'] },
  },
} satisfies Meta<typeof GTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Label', size: '56px', supportingText: 'Supporting text' },
};

export const Error: Story = {
  args: { label: 'Email', status: 'error', supportingText: 'Enter a valid email address', defaultValue: 'not-an-email' },
};

export const Success: Story = {
  args: { label: 'Username', status: 'success', supportingText: 'Username is available', defaultValue: 'trader_01' },
};

export const Disabled: Story = {
  args: { label: 'Label', disabled: true, defaultValue: 'Read only' },
};
