import './gWithdrawalDepositBadge.css';

export type TransactionType = 'withdrawal' | 'deposit' | 'transfer';

export interface GWithdrawalDepositBadgeProps {
  type: TransactionType;
  className?: string;
}

const LABELS: Record<TransactionType, string> = {
  withdrawal: 'Withdrawal',
  deposit: 'Deposit',
  transfer: 'Transfer',
};

/**
 * USE: withdrawal-badge, deposit-badge, transaction-type-badge, fund-flow-badge
 * WHEN: Labeling transaction type (withdrawal/deposit/transfer) in fund flow and transaction lists.
 * PLATFORM: Global
 * VARIANTS: Type (withdrawal/deposit/transfer).
 */
export function GWithdrawalDepositBadge({ type, className }: GWithdrawalDepositBadgeProps) {
  const classes = ['ds-txnbadge', `ds-txnbadge--${type}`, className].filter(Boolean).join(' ');
  return <span className={classes}>{LABELS[type]}</span>;
}
