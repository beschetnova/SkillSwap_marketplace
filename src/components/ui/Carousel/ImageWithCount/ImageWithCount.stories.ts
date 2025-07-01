import type { Meta, StoryObj } from "@storybook/react-vite";
import ImageWithCount from "./ImageWithCount";
import testImage from '../../../../images/skills/drums/drum-1.jpg';

const meta = {
  title: 'components/ImageWithCount',
  component: ImageWithCount,
  tags: ['autodocs'],
} satisfies Meta<typeof ImageWithCount>;
export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
  args: {
    image: testImage,
    count: 2,
  }
}