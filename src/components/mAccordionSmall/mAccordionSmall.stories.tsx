import type { Meta, StoryObj } from '@storybook/react-vite';
import { MAccordionSmall } from './mAccordionSmall';
import { MAccordionContainerSmall } from './mAccordionContainerSmall';

const meta = {
  title: 'Components/mAccordionSmall',
  component: MAccordionSmall,
  tags: ['autodocs'],
} satisfies Meta<typeof MAccordionSmall>;

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
    <MAccordionContainerSmall>
      <MAccordionSmall title="What is a demat account?">A demat account holds your securities in electronic form.</MAccordionSmall>
      <MAccordionSmall title="How do I place an order?">Search for a stock, choose buy or sell, and confirm quantity and price.</MAccordionSmall>
      <MAccordionSmall title="What are brokerage charges?">Charges vary by plan — check the pricing page for details.</MAccordionSmall>
    </MAccordionContainerSmall>
  ),
};
