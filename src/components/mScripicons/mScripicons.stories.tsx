import type { Meta, StoryObj } from '@storybook/react-vite';
import { MScripicons } from './mScripicons';

const meta = {
  title: 'Components/mScripicons',
  component: MScripicons,
  tags: ['autodocs'],
} satisfies Meta<typeof MScripicons>;

export default meta;
type Story = StoryObj<typeof meta>;

const logo = <div style={{ width: '100%', height: '100%', background: 'var(--fill-accent1-tertiary)' }} />;

export const Default: Story = { args: { logo, size: 'medium' } };
export const WithExchangeBadge: Story = { args: { logo, exchange: 'NSE', size: 'large' } };
