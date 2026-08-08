import type { Meta, StoryObj } from '@storybook/react-vite';
import { MAutoSuggestion } from './mAutoSuggestion';

const meta = {
  title: 'Components/mAutoSuggestion',
  component: MAutoSuggestion,
  tags: ['autodocs'],
} satisfies Meta<typeof MAutoSuggestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OTP: Story = {
  args: { suggestions: ['482910'], onSelect: () => {} },
};

export const StockNames: Story = {
  args: { suggestions: ['Reliance', 'Reliance Power', 'Reliance Infra'], onSelect: () => {} },
};
