import type { Meta, StoryObj } from '@storybook/react-vite';
import { AutoSuggestion } from './AutoSuggestion';

const meta = {
  title: 'Components/AutoSuggestion',
  component: AutoSuggestion,
  tags: ['autodocs'],
} satisfies Meta<typeof AutoSuggestion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OTP: Story = {
  args: { suggestions: ['482910'], onSelect: () => {} },
};

export const StockNames: Story = {
  args: { suggestions: ['Reliance', 'Reliance Power', 'Reliance Infra'], onSelect: () => {} },
};
