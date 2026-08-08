import type { Meta, StoryObj } from '@storybook/react-vite';
import { MPageErrorState } from './mPageErrorState';

const meta = {
  title: 'Components/mPageErrorState',
  component: MPageErrorState,
  tags: ['autodocs'],
} satisfies Meta<typeof MPageErrorState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NetworkError: Story = {
  args: {
    title: 'Something went wrong',
    message: "We couldn't load this page. Check your connection and try again.",
    onRetry: () => {},
  },
};

export const EmptyState: Story = {
  args: {
    title: 'No results found',
    message: 'Try adjusting your filters or search terms.',
  },
};
