import type { Meta, StoryObj } from '@storybook/react-vite';
import { ScripListItem } from './ScripListItem';
import { LineChart } from '../Charts/LineChart';

const meta = {
  title: 'Components/ScripListItem',
  component: ScripListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ScripListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

const logo = <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--fill-accent1-tertiary)' }} />;

export const Default: Story = {
  args: {
    logo,
    name: 'HDFC Bank',
    price: '1,487.00',
    changeValue: '-8.01',
    changePercent: '0.12%',
    direction: 'down',
  },
};

export const WithQuantityAndChart: Story = {
  args: {
    logo,
    name: 'Reliance Industries',
    subtitle: 'NSE',
    quantity: '10 shares',
    price: '2,940.50',
    changeValue: '+12.40',
    changePercent: '0.84%',
    direction: 'up',
    chart: <LineChart values={[162, 165, 163, 168, 170, 167, 172]} direction="positive" width={64} height={28} filled={false} />,
    onClick: () => {},
  },
};
