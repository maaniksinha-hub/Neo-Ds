import type { Meta, StoryObj } from '@storybook/react-vite';
import { MBottomBanner } from './mBottomBanner';
import { GSolidButton } from '../gSolidButton/gSolidButton';

const meta = {
  title: 'Components/mBottomBanner',
  component: MBottomBanner,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof MBottomBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Complete your KYC',
    subtext: 'Unlock margin trading and F&O',
    cta: (
      <GSolidButton variant="solid" type="primary" size="36px">
        Complete
      </GSolidButton>
    ),
  },
  render: (args) => (
    <div style={{ position: 'relative', height: 200 }}>
      <MBottomBanner {...args} />
    </div>
  ),
};
