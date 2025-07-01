import type { Meta, StoryObj } from "@storybook/react-vite";
import Icons from "./icons";

const meta = {
  title: 'components/Header/Icons',
  component: Icons,
  tags: ['autodocs'],
} satisfies Meta<typeof Icons>;
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    isAuth: true
  }
}
