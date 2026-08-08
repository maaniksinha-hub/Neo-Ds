import type { Meta, StoryObj } from '@storybook/react-vite';
import { MCarousel } from './mCarousel';

const meta = {
  title: 'Components/mCarousel',
  component: MCarousel,
  tags: ['autodocs'],
} satisfies Meta<typeof MCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

function Slide({ label }: { label: string }) {
  return (
    <div
      style={{
        height: 160,
        borderRadius: 12,
        background: 'var(--fill-accent1-tertiary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-accent1-primary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      {label}
    </div>
  );
}

export const Default: Story = {
  args: {
    children: [<Slide key="1" label="Slide 1" />, <Slide key="2" label="Slide 2" />, <Slide key="3" label="Slide 3" />],
  },
};
