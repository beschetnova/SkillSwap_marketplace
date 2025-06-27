import type { Meta, StoryObj } from "@storybook/react-vite";
import App from './App'

const meta = {
  title: 'Skillswap/ExampleFolder/App',
  component: App,
  tags: ['autodocs'],
} satisfies Meta<typeof App>;
export default meta;
type Story = StoryObj<typeof meta>;

export const MainPage: Story = {
}