import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Keyboard } from './Keyboard';

const meta = {
  title: 'Components/Keyboard',
  component: Keyboard,
  tags: ['autodocs'],
} satisfies Meta<typeof Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Numeric: Story = {
  args: { onKeyPress: () => {}, onBackspace: () => {} },
  render: () => {
    const [value, setValue] = useState('');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 24 }}>{value || '0'}</p>
        <Keyboard onKeyPress={(k) => setValue((v) => v + k)} onBackspace={() => setValue((v) => v.slice(0, -1))} />
      </div>
    );
  },
};
