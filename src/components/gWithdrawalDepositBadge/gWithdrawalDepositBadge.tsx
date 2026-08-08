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

export function GWithdrawalDepositBadge({ type, className }: GWithdrawalDepositBadgeProps) {
  const classes = ['ds-txnbadge', `ds-txnbadge--${type}`, className].filter(Boolean).join(' ');
  return <span className={classes}>{LABELS[type]}</span>;
}
