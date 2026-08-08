import type { Meta, StoryObj } from '@storybook/react-vite';
import { GRadioButton } from './gRadioButton';

const meta = {
  title: 'Components/gRadioButton',
  component: GRadioButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['default', 'small'] },
  },
} satisfies Meta<typeof GRadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unselected: Story = { args: { label: 'Label', name: 'demo' } };
export const Selected: Story = { args: { label: 'Label', name: 'demo', defaultChecked: true } };
export const Disabled: Story = { args: { label: 'Label', name: 'demo', disabled: true } };

export const Group: Story = {
  args: { label: 'Option A', name: 'group-demo' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <GRadioButton label="Option A" name="group-demo" defaultChecked />
      <GRadioButton label="Option B" name="group-demo" />
      <GRadioButton label="Option C" name="group-demo" disabled />
    </div>
  ),
};
