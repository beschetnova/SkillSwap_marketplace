import { mockSkills } from './mockSkills';
import { mockUsers } from './mockUsers';
import { configureStore, combineSlices } from '@reduxjs/toolkit';
import usersSlice from '../../services/slices/usersSlice';
import skillsSlice from '../../services/slices/skillsSlice';
import citiesSlice from '../../services/slices/citiesSlice'
import { mockCities } from './mockCities';

const rootReducer = combineSlices({
  skills: skillsSlice,
  users: usersSlice,
  cities: citiesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    users: {
      users: mockUsers,
      isLoading: false,
      error: undefined
    },
    skills: {
      skills: mockSkills,
      isLoading: false,
      error: undefined,
    },
    cities: {
      cities: mockCities,
      isLoading: false,
      error: undefined,
    }
  },
});