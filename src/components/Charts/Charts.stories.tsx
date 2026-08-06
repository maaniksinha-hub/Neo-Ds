import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from './LineChart';
import { BarChart } from './BarChart';
import { Legend } from './Legend';
import { ChartDot } from './ChartDot';

const meta = {
  title: 'Components/Charts',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const priceSeries = [162, 165, 163, 168, 170, 167, 172, 175, 173, 178];

export const Line: Story = {
  render: () => <LineChart values={priceSeries} direction="positive" />,
};

export const LineNegative: Story = {
  render: () => <LineChart values={[...priceSeries].reverse()} direction="negative" />,
};

export const Bar: Story = {
  render: () => (
    <BarChart
      height={180}
      bars={[
        { label: 'Mon', value: 40 },
        { label: 'Tue', value: 65 },
        { label: 'Wed', value: 30 },
        { label: 'Thu', value: 80, selected: true },
        { label: 'Fri', value: 55 },
      ]}
    />
  ),
};

export const LegendDefault: Story = {
  render: () => (
    <Legend
      items={[
        { label: 'Promoters', value: '52.3%', color: 'var(--fill-accent1-primary)' },
        { label: 'FII', value: '18.1%', color: 'var(--fill-positive-primary)' },
        { label: 'Public', value: '29.6%', color: 'var(--fill-accent3-primary)' },
      ]}
    />
  ),
};

export const Dot: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <ChartDot color="positive" pulse />
      <ChartDot color="negative" pulse />
    </div>
  ),
};
