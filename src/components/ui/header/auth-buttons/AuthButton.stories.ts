import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from 'storybook/test';
import AuthButtons from "./authButtons";

const meta = {
  title: 'components/Header/AuthButton',
  component: AuthButtons,
  tags: ['autodocs'],
  args: {
    setIsAuth: fn(),
  }
} satisfies Meta<typeof AuthButtons>;
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {}
}
