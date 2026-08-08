import type { Meta, StoryObj } from '@storybook/react-vite';
import { WTopNav } from './wTopNav';
import { GSearchBar } from '../gSearchBar/gSearchBar';
import { MIndexStrip } from '../mIndexStrip/mIndexStrip';
import { GSolidButton } from '../gSolidButton/gSolidButton';

const meta = {
  title: 'Components/wTopNav',
  component: WTopNav,
  tags: ['autodocs'],
} satisfies Meta<typeof WTopNav>;

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
    search: <GSearchBar placeholder="Search stocks, MFs..." />,
    actions: (
      <GSolidButton variant="solid" type="primary" size="36px">
        Sign in
      </GSolidButton>
    ),
    marketStrip: (
      <MIndexStrip
        items={[
          { name: 'NIFTY 50', value: '24,812.30', changeValue: '+142.10', changePercent: '0.58%', direction: 'up' },
          { name: 'SENSEX', value: '81,559.54', changeValue: '+468.20', changePercent: '0.58%', direction: 'up' },
        ]}
      />
    ),
  },
};
