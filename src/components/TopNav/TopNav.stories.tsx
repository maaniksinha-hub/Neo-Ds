import type { Meta, StoryObj } from '@storybook/react-vite';
import { TopNav } from './TopNav';
import { SearchBar } from '../SearchBar/SearchBar';
import { IndexStrip } from '../IndexStrip/IndexStrip';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/TopNav',
  component: TopNav,
  tags: ['autodocs'],
} satisfies Meta<typeof TopNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: <strong style={{ fontFamily: 'var(--font-heading)' }}>Neo</strong>,
    links: [
      { key: 'markets', label: 'Markets', active: true },
      { key: 'portfolio', label: 'Portfolio' },
      { key: 'orders', label: 'Orders' },
    ],
    search: <SearchBar placeholder="Search stocks, MFs..." />,
    actions: (
      <Button variant="solid" type="primary" size="36px">
        Sign in
      </Button>
    ),
    marketStrip: (
      <IndexStrip
        items={[
          { name: 'NIFTY 50', value: '24,812.30', changeValue: '+142.10', changePercent: '0.58%', direction: 'up' },
          { name: 'SENSEX', value: '81,559.54', changeValue: '+468.20', changePercent: '0.58%', direction: 'up' },
        ]}
      />
    ),
  },
};
