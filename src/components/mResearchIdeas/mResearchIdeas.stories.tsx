import type { Meta, StoryObj } from '@storybook/react-vite';
import { MResearchIdeas } from './mResearchIdeas';

const meta = {
  title: 'Components/mResearchIdeas',
  component: MResearchIdeas,
  tags: ['autodocs'],
} satisfies Meta<typeof MResearchIdeas>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Buy: Story = {
  args: {
    scripName: 'Infosys',
    call: 'buy',
    currentPrice: '1,842',
    targetPrice: '2,050',
    timeframe: '6 months',
    analystName: 'Motilal Oswal',
    confidence: 'high',
  },
};

export const Sell: Story = {
  args: {
    scripName: 'Zomato',
    call: 'sell',
    currentPrice: '268',
    targetPrice: '220',
    timeframe: '3 months',
    confidence: 'medium',
  },
};
