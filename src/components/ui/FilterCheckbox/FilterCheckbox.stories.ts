import type { Meta, StoryObj } from '@storybook/react-vite';
import FilterCheckbox from './FilterCheckbox';
import { fn } from 'storybook/test';

const meta = {
  title: 'components/Aside/FilterCheckbox',
  component: FilterCheckbox,
  tags: ['autodocs'],
  args: { toggleShowAll: fn(), handleCheckboxChange: fn() }
} satisfies Meta<typeof FilterCheckbox>;
export default meta;
type Story = StoryObj<typeof meta>;

const cities = [
  'Барнаул',
  'Владивосток',
  'Волгоград',
  'Воронеж',
  'Екатеринбург',
  'Ижевск',
  'Иркутск',
  'Казань',
  'Кемерово',
  'Краснодар',
  'Красноярск',
  'Махачкала',
  'Москва',
  'Нижний Новгород',
  'Новокузнецк',
  'Новосибирск',
  'Омск',
  'Оренбург',
  'Пермь',
  'Ростов-на-Дону'
];

export const FilterCheckboxUI: Story = {
  args: {
    title: 'тестовый заголовок',
    items: cities,
    checkedItems: [],
    showAll: false,
    buttonName: 'тестовое название кнопки'
  }
};
