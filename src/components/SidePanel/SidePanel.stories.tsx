import type { Meta, StoryObj } from '@storybook/react-vite';
import { SidePanel } from './SidePanel';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/SidePanel',
  component: SidePanel,
  tags: ['autodocs'],
} satisfies Meta<typeof SidePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Deposit & withdraw',
    children: 'Panel body content — forms, tabs, or any flow that needs more room than a modal.',
    onClose: () => {},
    footer: <Button size="44px">Continue</Button>,
  },
};
