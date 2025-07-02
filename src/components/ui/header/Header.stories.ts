import type { Meta, StoryObj } from "@storybook/react-vite";
import Header from "./header";

const meta = {
  title: 'components/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
  }
}
