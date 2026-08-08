import type { Meta, StoryObj } from '@storybook/react-vite';
import { GAvatarProfile } from './gAvatarProfile';

const meta = {
  title: 'Components/gAvatarProfile',
  component: GAvatarProfile,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['32px', '40px'] },
    shape: { control: 'select', options: ['circle', 'square'] },
  },
} satisfies Meta<typeof GAvatarProfile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Initials: Story = { args: { initials: 'NR' } };
export const Small: Story = { args: { initials: 'NR', size: '32px' } };
export const Company: Story = { args: { initials: 'HD', shape: 'square' } };
