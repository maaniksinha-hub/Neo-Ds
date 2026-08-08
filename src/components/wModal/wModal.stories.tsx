import type { Meta, StoryObj } from '@storybook/react-vite';
import { WModal } from './wModal';
import { GSolidButton } from '../gSolidButton/gSolidButton';

const meta = {
  title: 'Components/wModal',
  component: WModal,
  tags: ['autodocs'],
} satisfies Meta<typeof WModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Cancel order?',
    children: 'This action cannot be undone. Your pending order will be cancelled immediately.',
    onClose: () => {},
    footer: (
      <>
        <GSolidButton variant="outline" size="44px">
          Keep order
        </GSolidButton>
        <GSolidButton type="negative" size="44px">
          Cancel order
        </GSolidButton>
      </>
    ),
  },
};
