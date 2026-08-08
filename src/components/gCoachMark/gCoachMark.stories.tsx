import type { Meta, StoryObj } from '@storybook/react-vite';
import { GCoachMark } from './gCoachMark';

const meta = {
  title: 'Components/gCoachMark',
  component: GCoachMark,
  tags: ['autodocs'],
  argTypes: {
    arrow: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    align: { control: 'select', options: ['start', 'center', 'end'] },
  },
} satisfies Meta<typeof GCoachMark>;

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
