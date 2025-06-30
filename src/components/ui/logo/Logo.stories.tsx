import type { Meta, StoryObj } from '@storybook/react-vite';
import Logo from './logo.tsx';

const meta: Meta<typeof Logo> = {
  title: 'UI/Logo',
  component: Logo
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  render: () => <Logo />
};
