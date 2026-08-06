import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['neutral', 'negative', 'positive', 'highlight', 'brand', 'warning', 'orange'],
    },
    size: { control: 'select', options: ['small', 'standard', 'small-caps'] },
    variant: { control: 'select', options: ['filled', 'outline'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = { args: { variant: 'filled', color: 'brand', children: 'Label' } };
export const Outline: Story = { args: { variant: 'outline', color: 'brand', children: 'Label' } };

export const AllColors: Story = {
  args: { children: 'Label' },
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {(['neutral', 'negative', 'positive', 'highlight', 'brand', 'warning', 'orange'] as const).map((color) => (
        <Badge key={color} color={color}>
          {color}
        </Badge>
      ))}
    </div>
  ),
};
