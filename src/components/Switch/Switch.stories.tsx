import type { Meta, StoryObj } from '@storybook/react-vite';
import { Switch } from './Switch';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = { args: { label: 'Notifications' } };
export const On: Story = { args: { label: 'Notifications', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Notifications', disabled: true } };
