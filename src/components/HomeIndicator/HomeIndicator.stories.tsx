import type { Meta, StoryObj } from '@storybook/react-vite';
import { HomeIndicator } from './HomeIndicator';

const meta = {
  title: 'Components/HomeIndicator',
  component: HomeIndicator,
  tags: ['autodocs'],
} satisfies Meta<typeof HomeIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { theme: 'neutral' } };

export const Black: Story = {
  args: { theme: 'black' },
  render: (args) => (
    <div style={{ background: '#000' }}>
      <HomeIndicator {...args} />
    </div>
  ),
};
