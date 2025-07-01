import type { Meta, StoryObj } from '@storybook/react-vite';
import DropDownSkillsList from './DropDownSkillsList.tsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../../../../services/slices/skillsSlice';

const meta: Meta<typeof DropDownSkillsList> = {
  title: 'Components/Header/DropDownSkillsList',
  component: DropDownSkillsList,
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof DropDownSkillsList>;

const store = configureStore({
  reducer: {
    skills: skillsReducer
  },
  preloadedState: {
    skills: {
      skills: [{
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
      ]}
    ]
    ,
      isLoading: false,
      error: undefined
    }
  }
});

export const Default: Story = {
  render: () => (
    <Provider store={store}>
      <DropDownSkillsList />
    </Provider>
  )
};
