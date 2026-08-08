import type { Meta, StoryObj } from '@storybook/react-vite';
import { MBottomsheet } from './mBottomsheet';
import { MListItem } from '../mList/mListItem';

const meta = {
  title: 'Components/mBottomsheet',
  component: MBottomsheet,
  tags: ['autodocs'],
} satisfies Meta<typeof MBottomsheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Sort by',
    onClose: () => {},
    children: (
      <>
        <MListItem title="Price: High to low" />
        <MListItem title="Price: Low to high" />
        <MListItem title="Market cap" divider={false} />
      </>
    ),
  },
};
