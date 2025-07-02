import type { Meta, StoryObj } from "@storybook/react-vite";
import Profile from "./profile";

const meta = {
  title: 'components/Header/Profile',
  component: Profile,
  tags: ['autodocs'],
} satisfies Meta<typeof Profile>;
export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
  }
}