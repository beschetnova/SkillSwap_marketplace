import type { Meta, StoryObj } from '@storybook/react-vite';
import Nav from './nav';

const meta = {
  title: 'components/Header/Nav',
  component: Nav,
  tags: ['autodocs']
} satisfies Meta<typeof Nav>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};
