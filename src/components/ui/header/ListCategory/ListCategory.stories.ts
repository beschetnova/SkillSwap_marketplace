import type { Meta, StoryObj } from "@storybook/react-vite";
import ListCategory from "./ListCategory";

const meta = {
  title: 'components/Header/ListCategory',
  component: ListCategory,
  tags: ['autodocs'],
} satisfies Meta<typeof ListCategory>;
export default meta;
type Story = StoryObj<typeof meta>;

const skillsCategory = {
  id: '1',
  name: 'Тестовая категория',
  icon: '#',
  skills: [
    {
      id: '1',
      name: 'Скилл 1'
    },
    {
      id: '2',
      name: 'Скилл 2'
    },
    {
      id: '3',
      name: 'Скилл 3'
    },
    {
      id: '4',
      name: 'Скилл 4'
    },
  ]
};


export const Default: Story = {
  args: {
    item: skillsCategory
  }
}
