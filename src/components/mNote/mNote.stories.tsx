import type { Meta, StoryObj } from '@storybook/react-vite';
import { MNote } from './mNote';

const meta = {
  title: 'Components/mNote',
  component: MNote,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['neutral', 'highlight', 'warning', 'negative', 'positive'] },
  },
} satisfies Meta<typeof MNote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { children: 'This field is used to verify your identity.' } };
export const Warning: Story = { args: { type: 'warning', children: 'This action cannot be undone.' } };
export const Negative: Story = { args: { type: 'negative', children: 'Insufficient balance to complete this order.', onDismiss: () => {} } };
