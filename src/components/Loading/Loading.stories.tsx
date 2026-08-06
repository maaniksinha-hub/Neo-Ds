import type { Meta, StoryObj } from '@storybook/react-vite';
import { Spinner, ProgressBar } from './Loading';

const meta = {
  title: 'Components/Loading',
  component: Spinner,
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpinnerDefault: Story = { args: { size: 'medium' } };

export const Progress: Story = {
  args: {},
  render: () => <ProgressBar value={62} />,
};
