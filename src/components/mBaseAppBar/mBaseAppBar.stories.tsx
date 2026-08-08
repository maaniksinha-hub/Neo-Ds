import type { Meta, StoryObj } from '@storybook/react-vite';
import { MBaseAppBar } from './mBaseAppBar';
import { GSolidButton } from '../gSolidButton/gSolidButton';

const meta = {
  title: 'Components/mBaseAppBar',
  component: MBaseAppBar,
  tags: ['autodocs'],
} satisfies Meta<typeof MBaseAppBar>;

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
      <GSolidButton size="32px" variant="text">
        Watchlist
      </GSolidButton>
    ),
  },
};
