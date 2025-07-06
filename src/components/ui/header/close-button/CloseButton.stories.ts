import type { Meta, StoryObj } from '@storybook/react-vite';
import CloseButton from './closeButton';

const meta = {
  title: 'components/Header/CloseButton',
  component: CloseButton,
  tags: ['autodocs']
} satisfies Meta<typeof CloseButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
