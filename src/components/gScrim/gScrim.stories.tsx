import type { Meta, StoryObj } from '@storybook/react-vite';
import { GScrim } from './gScrim';

const meta = {
  title: 'Components/gScrim',
  component: GScrim,
  tags: ['autodocs'],
} satisfies Meta<typeof GScrim>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div style={{ position: 'relative', height: 200, background: 'var(--fill-accent1-tertiary)' }}>
      <GScrim className="ds-scrim--story" />
    </div>
  ),
};
