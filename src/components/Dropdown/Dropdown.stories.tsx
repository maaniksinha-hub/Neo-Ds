import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from './Dropdown';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { label: '1D', value: '1d' },
  { label: '1W', value: '1w' },
  { label: '1M', value: '1m' },
];

export const Default: Story = { args: { options } };
export const Disabled: Story = { args: { options, disabled: true } };
