import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from '../../../services/slices/skillsSlice';
import DropDownSkillsList from '../header/DropDownSkillsList/DropDownSkillsList';
import { mockSkills } from './mockSkills';

const store = configureStore({
  reducer: {
    skills: skillsReducer
  },
  preloadedState: {
    skills: {
      skills: mockSkills,
      isLoading: false,
      error: undefined
    }
  }
});

const meta: Meta<typeof DropDownSkillsList> = {
  title: 'UI/DropdownUI',
  component: DropDownSkillsList,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <Story />
      </Provider>
    )
  ]
};
export default meta;

type Story = StoryObj<typeof DropDownSkillsList>;

export const Default: Story = {};
