import type { Meta, StoryObj } from '@storybook/react';
import FooterUI from './footer';

const meta = {
  title: 'Components/Footer',
  component: FooterUI,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof FooterUI>;

export default meta;
type Story = StoryObj<typeof FooterUI>;

export const Default: Story = {};
