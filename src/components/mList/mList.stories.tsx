import type { Meta, StoryObj } from '@storybook/react-vite';
import { MList } from './mList';
import { MListItem } from './mListItem';

const meta = {
  title: 'Components/mList',
  component: MList,
  tags: ['autodocs'],
} satisfies Meta<typeof MList>;

export default meta;
type Story = StoryObj<typeof meta>;

const chevron = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Default: Story = {
  args: { children: null },
  render: () => (
    <MList>
      <MListItem title="Notifications" trailing={chevron} onClick={() => {}} />
      <MListItem title="Two-factor authentication" subtitle="Add an extra layer of security" trailing={chevron} onClick={() => {}} />
      <MListItem title="Linked bank accounts" subtitle="3 accounts linked" trailing={chevron} onClick={() => {}} divider={false} />
    </MList>
  ),
};

export const WithLeadingIcon: Story = {
  args: { children: null },
  render: () => (
    <MList>
      <MListItem
        leading={
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--fill-neutral-tertiary)' }} />
        }
        title="Portfolio value"
        subtitle="Updated 2 min ago"
        trailing={<span style={{ fontSize: 14, color: 'var(--text-positive-primary)' }}>+2.4%</span>}
      />
      <MListItem
        leading={
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--fill-neutral-tertiary)' }} />
        }
        title="Available margin"
        trailing={<span style={{ fontSize: 14 }}>₹12,480</span>}
        divider={false}
      />
    </MList>
  ),
};

export const Compact: Story = {
  args: { children: null },
  render: () => (
    <MList>
      <MListItem density="compact" title="Notifications" trailing={chevron} onClick={() => {}} />
      <MListItem density="compact" title="Security" trailing={chevron} onClick={() => {}} />
      <MListItem density="compact" title="Linked accounts" trailing={chevron} onClick={() => {}} divider={false} />
    </MList>
  ),
};
