import type { Meta, StoryObj } from '@storybook/react-vite';
import { BottomBanner } from './BottomBanner';
import { Button } from '../Button/Button';

const meta = {
  title: 'Components/BottomBanner',
  component: BottomBanner,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof BottomBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Complete your KYC',
    subtext: 'Unlock margin trading and F&O',
    cta: (
      <Button variant="solid" type="primary" size="36px">
        Complete
      </Button>
    ),
  },
  render: (args) => (
    <div style={{ position: 'relative', height: 200 }}>
      <BottomBanner {...args} />
    </div>
  ),
};
