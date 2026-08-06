import type { Meta, StoryObj } from '@storybook/react-vite';
import { Scrim } from './Scrim';

const meta = {
  title: 'Components/Scrim',
  component: Scrim,
  tags: ['autodocs'],
} satisfies Meta<typeof Scrim>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ position: 'relative', height: 200, background: 'var(--fill-accent1-tertiary)' }}>
      <Scrim className="ds-scrim--story" />
    </div>
  ),
};
