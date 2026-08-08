import type { Meta, StoryObj } from '@storybook/react-vite';
import { GSwitch } from './gSwitch';

const meta = {
  title: 'Components/gSwitch',
  component: GSwitch,
  tags: ['autodocs'],
} satisfies Meta<typeof GSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = { args: { label: 'Notifications' } };
export const On: Story = { args: { label: 'Notifications', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Notifications', disabled: true } };
