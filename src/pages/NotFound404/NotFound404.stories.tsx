import type { Meta, StoryObj } from '@storybook/react-vite';
import NotFound404 from './NotFound404';
import { LayoutPageHOC } from '../../utils/storiesHOC/LayoutPageHOC/LayoutPageHOC';

const meta = {
  title: 'Page/NotFound404',
  component: NotFound404,
  parameters: {
    layout: 'fullscreen'
  },
} satisfies Meta<typeof NotFound404>;

export default meta;
type Story = StoryObj<typeof NotFound404>;

export const Default: Story = {
  render: () => (
    <LayoutPageHOC>
      <NotFound404 />
    </LayoutPageHOC>
  )
};