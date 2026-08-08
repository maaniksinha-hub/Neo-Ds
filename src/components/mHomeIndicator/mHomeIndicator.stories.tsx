import type { Meta, StoryObj } from '@storybook/react-vite';
import { MHomeIndicator } from './mHomeIndicator';

const meta = {
  title: 'Components/mHomeIndicator',
  component: MHomeIndicator,
  tags: ['autodocs'],
} satisfies Meta<typeof MHomeIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = { args: { theme: 'neutral' } };

export const Black: Story = {
  args: { theme: 'black' },
  render: (args) => (
    <div style={{ background: '#000' }}>
      <MHomeIndicator {...args} />
    </div>
  ),
};
