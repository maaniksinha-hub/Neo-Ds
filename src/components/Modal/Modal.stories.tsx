import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal } from './Modal';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Cancel order?',
    children: 'This action cannot be undone. Your pending order will be cancelled immediately.',
    onClose: () => {},
    footer: (
      <>
        <Button variant="outline" size="44px">
          Keep order
        </Button>
        <Button type="negative" size="44px">
          Cancel order
        </Button>
      </>
    ),
  },
};
