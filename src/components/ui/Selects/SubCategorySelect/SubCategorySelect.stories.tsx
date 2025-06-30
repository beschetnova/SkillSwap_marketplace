import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { SubCategorySelect } from './SubCategorySelect.tsx';

const mockSkillReducer = () => ({
  skills: [
    {
      id: 'business-and-career',
      name: 'Бизнес и карьера',
      icon: 'briefcase-icon.svg',
      skills: [
        { id: 'team-management', name: 'Управление командой' },
        { id: 'marketing-and-advertising', name: 'Маркетинг и реклама' },
        { id: 'sales-and-negotiations', name: 'Продажи и переговоры' },
        { id: 'personal-brand', name: 'Личный бренд' },
        { id: 'resume-and-interview', name: 'Резюме и собеседование' },
        { id: 'time-management', name: 'Тайм-менеджмент' },
        { id: 'project-management', name: 'Проектное управление' },
        { id: 'entrepreneurship', name: 'Предпринимательство' }
      ]
    }
  ],
  isLoading: false,
  error: undefined
});

const mockStore = configureStore({
  reducer: {
    skills: mockSkillReducer
  }
});

const meta: Meta<typeof SubCategorySelect> = {
  title: 'Ui/Selects/SubCategorySelect',
  component: SubCategorySelect,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof SubCategorySelect>;

export const Default: Story = {
  render: () => {
    const [subcategory, setSubcategory] = useState('');

    return (
      <Provider store={mockStore}>
        <SubCategorySelect
          subcategory={subcategory}
          setSubcategory={setSubcategory}
          category='business-and-career'
        />
      </Provider>
    );
  }
};
