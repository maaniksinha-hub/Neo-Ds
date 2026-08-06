import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScripName } from './ScripName';

const meta = {
  title: 'Components/ScripName',
  component: ScripName,
  tags: ['autodocs'],
} satisfies Meta<typeof ScripName>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { name: 'Reliance Industries', exchange: 'NSE', size: 'medium', onClick: () => {} },
};

export const WithSector: Story = {
  args: { name: 'HDFC Bank', exchange: 'BSE', sector: 'Banking', size: 'large', onClick: () => {} },
};
