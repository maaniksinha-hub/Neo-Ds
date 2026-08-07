import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographyDoc } from './TypographyDoc';

const meta = {
  title: 'Foundations/Typography',
  component: TypographyDoc,
  tags: ['autodocs'],
} satisfies Meta<typeof TypographyDoc>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTokens: Story = {};
