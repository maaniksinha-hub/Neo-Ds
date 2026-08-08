import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { GChoiceChip } from './gChoiceChip';

const meta = {
  title: 'Components/gChoiceChip',
  component: GChoiceChip,
  tags: ['autodocs'],
} satisfies Meta<typeof GChoiceChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChoiceGroup: Story = {
  args: { children: '1D' },
  render: () => {
    const options = ['1D', '1W', '1M', '1Y', 'ALL'];
    const [selected, setSelected] = useState('1M');
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        {options.map((o) => (
          <GChoiceChip key={o} selected={o === selected} onClick={() => setSelected(o)}>
            {o}
          </GChoiceChip>
        ))}
      </div>
    );
  },
};

export const BuySell: Story = {
  args: { children: 'Buy' },
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <GChoiceChip type="buy" selected>
        Buy
      </GChoiceChip>
      <GChoiceChip type="sell">Sell</GChoiceChip>
    </div>
  ),
};

export const ActionChip: Story = {
  args: { variant: 'action', children: '+ Add funds' },
};

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
};
