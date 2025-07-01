import type { Meta, StoryObj } from "@storybook/react-vite";
import ListItem from "./ListItem";

const meta = {
  title: 'components/Header/ListItem',
  component: ListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof meta>;

const skill = {
  id: '1',
  name: 'Тестовый скилл'
}

export const Default: Story = {
  args: {
    item: skill
  }
}