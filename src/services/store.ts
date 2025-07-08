import { combineSlices, configureStore } from '@reduxjs/toolkit';
import skillsSlice from './slices/skillsSlice';
import usersSlice from './slices/usersSlice';
import citiesSlice from './slices/citiesSlice';
import profileSlice from './slices/profileSlice';
import filtersSlice from './slices/filtersSlice';
import userSlice from './slices/userSlice';

export const rootReducer = combineSlices({
  skills: skillsSlice,
  users: usersSlice,
  cities: citiesSlice,
  profile: profileSlice,
  filters: filtersSlice,
  user: userSlice
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
