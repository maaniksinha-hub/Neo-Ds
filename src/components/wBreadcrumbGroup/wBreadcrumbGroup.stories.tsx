import type { Meta, StoryObj } from '@storybook/react-vite';
import { WBreadcrumbGroup } from './wBreadcrumbGroup';

const meta = {
  title: 'Components/wBreadcrumbGroup',
  component: WBreadcrumbGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof WBreadcrumbGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [{ label: 'Home' }, { label: 'Stocks' }, { label: 'Tata Steel' }],
  },
};

export const Overflow: Story = {
  args: {
    items: [{ label: 'Home' }, { label: 'Markets' }, { label: 'Stocks' }, { label: 'Steel sector' }, { label: 'Tata Steel' }],
    maxVisible: 3,
  },
};
