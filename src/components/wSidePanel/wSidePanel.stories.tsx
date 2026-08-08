import type { Meta, StoryObj } from '@storybook/react-vite';
import { WSidePanel } from './wSidePanel';
import { GSolidButton } from '../gSolidButton/gSolidButton';

const meta = {
  title: 'Components/wSidePanel',
  component: WSidePanel,
  tags: ['autodocs'],
} satisfies Meta<typeof WSidePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Deposit & withdraw',
    children: 'Panel body content — forms, tabs, or any flow that needs more room than a modal.',
    onClose: () => {},
    footer: <GSolidButton size="44px">Continue</GSolidButton>,
  },
};
