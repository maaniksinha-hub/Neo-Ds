import type { Meta, StoryObj } from '@storybook/react-vite';
import { AppBar } from './AppBar';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/AppBar',
  component: AppBar,
  tags: ['autodocs'],
} satisfies Meta<typeof AppBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleOnly: Story = {
  args: { title: 'Portfolio', onBack: () => {} },
};

export const WithSubtextAndCta: Story = {
  args: {
    title: 'Tata Steel',
    subtext: 'NSE',
    onBack: () => {},
    cta: (
      <Button size="32px" variant="text">
        Watchlist
      </Button>
    ),
  },
};
