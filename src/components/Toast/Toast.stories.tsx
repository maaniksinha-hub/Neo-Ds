import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from './Toast';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['notification', 'success', 'error', 'warning', 'inverse'] },
  },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { state: 'success', heading: 'Order placed successfully', subtext: 'Your order for 10 shares of TCS was placed.' },
};

export const ErrorToast: Story = {
  args: { state: 'error', heading: 'Order failed', subtext: 'Insufficient margin to place this order.', onDismiss: () => {} },
};

export const Warning: Story = {
  args: { state: 'warning', heading: 'Market closing soon' },
};

export const Notification: Story = {
  args: { state: 'notification', heading: 'New feature available', onDismiss: () => {} },
};

export const Inverse: Story = {
  args: { state: 'inverse', heading: 'Synced across devices', onDismiss: () => {} },
};
