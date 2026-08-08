import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { GCarouselDots } from './gCarouselDots';

const meta = {
  title: 'Components/gCarousel dots',
  component: GCarouselDots,
  tags: ['autodocs'],
} satisfies Meta<typeof GCarouselDots>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { count: 3, active: 1 },
};

export const Interactive: Story = {
  args: { count: 4, active: 0 },
  render: () => {
    const [active, setActive] = useState(0);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
        <GCarouselDots count={4} active={active} />
        <button type="button" onClick={() => setActive((a) => (a + 1) % 4)}>
          Next
        </button>
      </div>
    );
  },
};
