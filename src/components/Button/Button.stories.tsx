import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['solid', 'outline', 'text'] },
    type: { control: 'select', options: ['primary', 'positive', 'negative', 'sell-cta'] },
    size: { control: 'select', options: ['32px', '36px', '44px', '52px'] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: { variant: 'solid', type: 'primary', size: '44px', children: 'Button' },
};

export const Outline: Story = {
  args: { variant: 'outline', type: 'primary', size: '44px', children: 'Button' },
};

export const Text: Story = {
  args: { variant: 'text', type: 'primary', size: '44px', children: 'Button' },
};

export const AllTypes: Story = {
  args: { children: 'Button' },
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      {(['primary', 'positive', 'negative', 'sell-cta'] as const).map((type) => (
        <Button key={type} type={type}>
          {type}
        </Button>
      ))}
    </div>
  ),
};

export const AllSizes: Story = {
  args: { children: 'Button' },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      {(['32px', '36px', '44px', '52px'] as const).map((size) => (
        <Button key={size} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};
