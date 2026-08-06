import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioButton } from './RadioButton';

const meta = {
  title: 'Components/RadioButton',
  component: RadioButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = { args: { label: 'Label', name: 'demo' } };
export const Selected: Story = { args: { label: 'Label', name: 'demo', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Label', name: 'demo', disabled: true } };

export const Group: Story = {
  args: { label: 'Option A', name: 'group-demo' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <RadioButton label="Option A" name="group-demo" defaultChecked />
      <RadioButton label="Option B" name="group-demo" />
      <RadioButton label="Option C" name="group-demo" disabled />
    </div>
  ),
};
