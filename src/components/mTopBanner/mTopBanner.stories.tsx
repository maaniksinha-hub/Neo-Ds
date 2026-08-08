import type { Meta, StoryObj } from '@storybook/react-vite';
import { MTopBanner } from './mTopBanner';
import { GSolidButton } from '../gSolidButton/gSolidButton';

const meta = {
  title: 'Components/mTopBanner',
  component: MTopBanner,
  tags: ['autodocs'],
} satisfies Meta<typeof MTopBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Market is closed right now',
    subtext: 'Deposits made will be updated when the market opens at 9:15 AM',
  },
};

export const NegativeWithActions: Story = {
  args: {
    type: 'negative',
    title: 'You have negative Cash balance',
    subtext: 'Add funds or pledge stocks before 16 Jan to avoid liquidation.',
    actions: (
      <>
        <GSolidButton size="32px">Add funds</GSolidButton>
        <GSolidButton size="32px" variant="text">
          View details
        </GSolidButton>
      </>
    ),
  },
};
