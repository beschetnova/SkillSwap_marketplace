import type { Meta, StoryObj } from "@storybook/react-vite";
import Carousel from "./Carousel";
import testImage1 from '../../../images/skills/drums/drum-1.jpg';
import testImage2 from '../../../images/skills/drums/drum-2.jpg';
import testImage3 from '../../../images/skills/drums/drum-3.jpg';
import testImage4 from '../../../images/skills/drums/drum-4.jpg';
import testImage5 from '../../../images/skills/drums/drum-1.jpg';

const meta = {
  title: 'components/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;
export default meta;
type Story = StoryObj<typeof meta>;

const items = [testImage1, testImage2, testImage3, testImage4, testImage5];

export const FilterRadioUI: Story = {
  args: {
    images: items
  }
}
