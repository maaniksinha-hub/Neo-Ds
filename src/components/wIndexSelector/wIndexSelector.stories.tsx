import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { WIndexSelector } from './wIndexSelector';

const meta = {
  title: 'Components/wIndexSelector',
  component: WIndexSelector,
  tags: ['autodocs'],
} satisfies Meta<typeof WIndexSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: 'nifty50', label: 'NIFTY 50' },
  { value: 'sensex', label: 'SENSEX' },
  { value: 'niftybank', label: 'NIFTY Bank' },
];

export const Default: Story = {
  args: { options, value: 'nifty50', onChange: () => {} },
  render: () => {
    const [value, setValue] = useState('nifty50');
    return <WIndexSelector options={options} value={value} onChange={setValue} />;
  },
};
