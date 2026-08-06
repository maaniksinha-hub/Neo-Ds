import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Plain: Story = {
  args: { title: 'What is a demat account?', children: 'A demat account holds your securities in electronic form.' },
};

export const Contained: Story = {
  args: {
    title: 'Section header',
    children: 'Section body content goes here.',
    emphasis: 'contained',
    defaultExpanded: true,
  },
};
