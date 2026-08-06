import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomSheet } from './BottomSheet';
import { ListItem } from '../List/ListItem';

const meta = {
  title: 'Components/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
} satisfies Meta<typeof BottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sort by',
    onClose: () => {},
    children: (
      <>
        <ListItem title="Price: High to low" />
        <ListItem title="Price: Low to high" />
        <ListItem title="Market cap" divider={false} />
      </>
    ),
  },
};
