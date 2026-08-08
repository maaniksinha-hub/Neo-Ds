import type { Meta, StoryObj } from '@storybook/react-vite';
import { WScripName } from './wScripName';

const meta = {
  title: 'Components/wScripName',
  component: WScripName,
  tags: ['autodocs'],
} satisfies Meta<typeof WScripName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: 'Reliance Industries', exchange: 'NSE', size: 'medium', onClick: () => {} },
};

export const WithSector: Story = {
  args: { name: 'HDFC Bank', exchange: 'BSE', sector: 'Banking', size: 'large', onClick: () => {} },
};
