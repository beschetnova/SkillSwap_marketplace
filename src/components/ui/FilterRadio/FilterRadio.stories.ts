import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import FilterRadio from './FilterRadio';

const meta = {
  title: 'components/Aside/FilterRadio',
  component: FilterRadio,
  tags: ['autodocs'],
  args: { handleChange: fn() }
} satisfies Meta<typeof FilterRadio>;
export default meta;
type Story = StoryObj<typeof meta>;

const items = ['Не имеет значения', 'Мужской', 'Женский'];

export const FilterRadioUI: Story = {
  args: {
    title: 'тестовый заголовок',
    items: items,
    selectedItem: null,
    nameAttribute: 'test-radio'
  }
};
