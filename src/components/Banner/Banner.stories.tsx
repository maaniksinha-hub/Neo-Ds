import type { Meta, StoryObj } from '@storybook/react-vite';
import { Banner } from './Banner';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Banner',
  component: Banner,
  tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

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
        <Button size="32px">Add funds</Button>
        <Button size="32px" variant="text">
          View details
        </Button>
      </>
    ),
  },
};
