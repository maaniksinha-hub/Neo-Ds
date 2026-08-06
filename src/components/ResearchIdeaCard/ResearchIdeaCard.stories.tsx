import type { Meta, StoryObj } from '@storybook/react-vite';
import { ResearchIdeaCard } from './ResearchIdeaCard';

const meta = {
  title: 'Components/ResearchIdeaCard',
  component: ResearchIdeaCard,
  tags: ['autodocs'],
} satisfies Meta<typeof ResearchIdeaCard>;

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
