import type { Meta, StoryObj } from '@storybook/react-vite';
import { PageErrorState } from './PageErrorState';

const meta = {
  title: 'Components/PageErrorState',
  component: PageErrorState,
  tags: ['autodocs'],
} satisfies Meta<typeof PageErrorState>;

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
