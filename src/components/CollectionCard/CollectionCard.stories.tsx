import type { Meta, StoryObj } from '@storybook/react-vite';
import { CollectionCard } from './CollectionCard';

const meta = {
  title: 'Components/CollectionCard',
  component: CollectionCard,
  tags: ['autodocs'],
} satisfies Meta<typeof CollectionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basket: Story = {
  args: {
    variant: 'basket',
    title: 'Tech Giants',
    subtitle: '12 stocks · +18.4% (1Y)',
    tags: ['Curated'],
    onClick: () => {},
  },
};

export const Screener: Story = {
  args: {
    variant: 'screener',
    title: 'High dividend yield',
    subtitle: '48 stocks match',
    onClick: () => {},
  },
};

export const Redirection: Story = {
  args: {
    variant: 'redirection',
    title: 'Explore IPOs',
    subtitle: 'View upcoming and ongoing IPOs',
    onClick: () => {},
  },
};
