import type { Meta, StoryObj } from '@storybook/react-vite';
import { GWithdrawalDepositBadge } from './gWithdrawalDepositBadge';

const meta = {
  title: 'Components/gWithdrawalDepositBadge',
  component: GWithdrawalDepositBadge,
  tags: ['autodocs'],
} satisfies Meta<typeof GWithdrawalDepositBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTypes: Story = {
  args: { type: 'deposit' },
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <GWithdrawalDepositBadge type="deposit" />
      <GWithdrawalDepositBadge type="withdrawal" />
      <GWithdrawalDepositBadge type="transfer" />
    </div>
  ),
};
