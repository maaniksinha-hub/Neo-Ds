import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Chip } from './Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

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
          <Chip key={o} selected={o === selected} onClick={() => setSelected(o)}>
            {o}
          </Chip>
        ))}
      </div>
    );
  },
};

export const BuySell: Story = {
  args: { children: 'Buy' },
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Chip type="buy" selected>
        Buy
      </Chip>
      <Chip type="sell">Sell</Chip>
    </div>
  ),
};

export const ActionChip: Story = {
  args: { variant: 'action', children: '+ Add funds' },
};

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
};
