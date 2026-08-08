import type { Meta, StoryObj } from '@storybook/react-vite';
import { LineChart } from './LineChart';
import { MultiLineChart } from './MultiLineChart';
import { BarChart } from './BarChart';
import { Legend } from './Legend';
import { ChartDot } from './ChartDot';
import { StackedBarChart } from './StackedBarChart';
import { GroupedBarChart } from './GroupedBarChart';
import { ChartTooltip } from './ChartTooltip';
import { ChartSkeleton } from './ChartSkeleton';
import { Gridlines } from './Gridlines';
import { AxisLabels } from './AxisLabels';
import { MXAxis, GYAxis } from '../../ds';

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

export const StackedBar: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <StackedBarChart
        segments={[
          { label: 'Promoters', value: 52.3, color: 'var(--fill-accent1-primary)' },
          { label: 'FII', value: 18.1, color: 'var(--fill-positive-primary)' },
          { label: 'Public', value: 29.6, color: 'var(--fill-accent3-primary)' },
        ]}
      />
    </div>
  ),
};

export const GroupedBar: Story = {
  render: () => (
    <GroupedBarChart
      height={180}
      groups={[
        { label: 'Q1', bars: [{ value: 40, color: 'var(--fill-accent1-primary)' }, { value: 55, color: 'var(--fill-positive-primary)' }] },
        { label: 'Q2', bars: [{ value: 65, color: 'var(--fill-accent1-primary)' }, { value: 48, color: 'var(--fill-positive-primary)' }] },
        { label: 'Q3', bars: [{ value: 30, color: 'var(--fill-accent1-primary)', selected: true }, { value: 60, color: 'var(--fill-positive-primary)' }] },
      ]}
    />
  ),
};

export const MixedLine: Story = {
  render: () => (
    <MultiLineChart
      width={320}
      height={140}
      series={[
        { values: priceSeries, color: 'var(--fill-accent1-primary)', filled: true },
        { values: [158, 160, 161, 163, 164, 163, 165, 168, 170, 172], color: 'var(--text-neutral-tertiary)', dashed: true },
      ]}
    />
  ),
};

export const ChartTooltipDefault: Story = {
  render: () => (
    <ChartTooltip
      rows={[
        { label: 'Open', value: '2,930.00' },
        { label: 'High', value: '2,945.20' },
        { label: 'Low', value: '2,921.80' },
        { label: 'Close', value: '2,940.50' },
      ]}
    />
  ),
};

export const Skeleton: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <ChartSkeleton size="medium" />
    </div>
  ),
};

export const GridlinesDefault: Story = {
  render: () => <Gridlines density="medium" width={300} height={140} />,
};

export const Axis: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <AxisLabels labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']} orientation="horizontal" />
    </div>
  ),
};

export const XAxis: Story = {
  render: () => (
    <div style={{ width: 300 }}>
      <MXAxis labels={['Jan', 'Feb', 'Mar', 'Apr', 'May']} />
    </div>
  ),
};

export const YAxis: Story = {
  render: () => (
    <div style={{ height: 140 }}>
      <GYAxis labels={['100', '75', '50', '25', '0']} />
    </div>
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
