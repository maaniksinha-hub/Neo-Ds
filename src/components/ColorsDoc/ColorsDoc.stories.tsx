import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorsDoc } from './ColorsDoc';

const meta = {
  title: 'Foundations/Colors',
  component: ColorsDoc,
  tags: ['autodocs'],
} satisfies Meta<typeof ColorsDoc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTokens: Story = {};
