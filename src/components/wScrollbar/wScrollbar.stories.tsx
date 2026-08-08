import type { Meta, StoryObj } from '@storybook/react-vite';
import { WScrollbar } from './wScrollbar';

const meta = {
  title: 'Components/wScrollbar',
  component: WScrollbar,
  tags: ['autodocs'],
} satisfies Meta<typeof WScrollbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    maxHeight: 160,
    children: (
      <div style={{ width: 240 }}>
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} style={{ margin: '8px 0', fontFamily: 'var(--font-body)', fontSize: 13 }}>
            Row {i + 1}
          </p>
        ))}
      </div>
    ),
  },
};
