import type { Meta, StoryObj } from '@storybook/react-vite';
import { MPriceChangePercentage } from './mPriceChangePercentage';

const meta = {
  title: 'Components/mPriceChangePercentage',
  component: MPriceChangePercentage,
  tags: ['autodocs'],
} satisfies Meta<typeof MPriceChangePercentage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = { args: { value: '+12.40', percent: '0.84%', direction: 'up' } };
export const Down: Story = { args: { value: '-8.01', percent: '0.12%', direction: 'down' } };
export const Neutral: Story = { args: { value: '0.00', percent: '0.00%', direction: 'neutral', showArrow: false } };
export const PercentOnly: Story = { args: { percent: '0.84%', direction: 'up', format: 'percent' } };
