import type { Meta, StoryObj } from '@storybook/react-vite';
import ProfileSidebar from './ProfileSidebar';

const meta = {
  title: 'Components/ProfileSidebar',
  component: ProfileSidebar,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ProfileSidebar>;

export default meta;

type Story = StoryObj<typeof ProfileSidebar>;

export const Default: Story = {};
