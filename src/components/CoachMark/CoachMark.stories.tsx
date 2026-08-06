import type { Meta, StoryObj } from '@storybook/react-vite';
import { CoachMark } from './CoachMark';

const meta = {
  title: 'Components/CoachMark',
  component: CoachMark,
  tags: ['autodocs'],
  argTypes: {
    arrow: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    align: { control: 'select', options: ['start', 'center', 'end'] },
  },
} satisfies Meta<typeof CoachMark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextOnly: Story = {
  args: {
    title: 'Order form has a new look!',
    body: 'Enter by amount, we’ll calculate the shares for you.',
    step: '1 of 3',
    onNext: () => {},
    onSkip: () => {},
  },
};
