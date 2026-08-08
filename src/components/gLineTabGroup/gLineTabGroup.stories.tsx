import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { GLineTabGroup } from './gLineTabGroup';

const meta = {
  title: 'Components/gLineTabGroup',
  component: GLineTabGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof GLineTabGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { value: 'overview', label: 'Overview' },
  { value: 'financials', label: 'Financials' },
  { value: 'peers', label: 'Peers' },
  { value: 'events', label: 'Events', disabled: true },
];

export const Default: Story = {
  args: { items, value: 'overview', onChange: () => {} },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <GLineTabGroup {...args} value={value} onChange={setValue} />;
  },
};
