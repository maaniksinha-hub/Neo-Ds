import type { Meta, StoryObj } from '@storybook/react-vite';
import { StockCard } from './StockCard';

function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: 'var(--fill-accent1-tertiary)',
        color: 'var(--text-accent1-primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 12,
        fontWeight: 600,
      }}
    >
      {label}
    </div>
  );
}

const meta = {
  title: 'Components/StockCard',
  component: StockCard,
  tags: ['autodocs'],
} satisfies Meta<typeof StockCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <LogoPlaceholder label="HD" />,
    name: 'HDFC Bank',
    price: '1,487',
    priceDecimal: '.00',
    changeValue: '-8.01',
    changePercent: '0.12%',
    direction: 'down',
  },
};

export const WithBadge: Story = {
  args: {
    ...Default.args,
    variant: 'with-badge',
    badgeLabel: 'F&O',
  },
};

export const Highlighted: Story = {
  args: {
    ...Default.args,
    highlight: true,
  },
};

export const Insights: Story = {
  args: {
    ...Default.args,
    variant: 'insights',
    insightsNote: 'Dividend announced',
  },
};

export const Positive: Story = {
  args: {
    ...Default.args,
    changeValue: '+12.40',
    changePercent: '0.84%',
    direction: 'up',
  },
};

export const WithDescription: Story = {
  args: {
    ...Default.args,
    description: 'India’s largest private sector bank by assets, with a strong retail deposit franchise and expanding digital lending book.',
  },
};
