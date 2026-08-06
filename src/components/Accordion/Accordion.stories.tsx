import type { Meta, StoryObj } from '@storybook/react-vite';
import { Accordion } from './Accordion';
import { AccordionGroup } from './AccordionGroup';

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

export const Big: Story = {
  args: {
    title: 'Order history',
    children: 'A section-level accordion for grouping primary content areas.',
    size: 'big',
    defaultExpanded: true,
  },
};

export const Group: Story = {
  args: { title: '', children: null },
  render: () => (
    <AccordionGroup>
      <Accordion title="What is a demat account?">A demat account holds your securities in electronic form.</Accordion>
      <Accordion title="How do I place an order?">Search for a stock, choose buy or sell, and confirm quantity and price.</Accordion>
      <Accordion title="What are brokerage charges?">Charges vary by plan — check the pricing page for details.</Accordion>
    </AccordionGroup>
  ),
};
