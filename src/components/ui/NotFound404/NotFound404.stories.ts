import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import NotFound404UI from './NotFound404';

const meta = {
  title: 'Components/NotFound404',
  component: NotFound404UI,
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    errorMessageHandle: fn(),
    redirectHandle: fn()
  }
} satisfies Meta<typeof NotFound404UI>;

export default meta;
type Story = StoryObj<typeof NotFound404UI>;

export const Default: Story = {};
