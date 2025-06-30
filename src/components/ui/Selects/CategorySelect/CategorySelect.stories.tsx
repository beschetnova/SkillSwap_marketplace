import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { CategorySelect } from './CategorySelect.tsx';

const mockSkillReducer = () => ({
  skills: [
    { id: '1', name: 'Программирование' },
    { id: '2', name: 'Дизайн' },
    { id: '3', name: 'Маркетинг' }
  ],
  isLoading: false,
  error: undefined
});

const mockStore = configureStore({
  reducer: {
    skills: mockSkillReducer
  }
});

const meta: Meta<typeof CategorySelect> = {
  title: 'Ui/Selects/CategorySelect',
  component: CategorySelect,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof CategorySelect>;

export const Default: Story = {
  render: () => {
    const [category, setCategory] = useState('');

    return (
      <Provider store={mockStore}>
        <CategorySelect category={category} setCategory={setCategory} />
      </Provider>
    );
  }
};
