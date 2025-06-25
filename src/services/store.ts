import { combineSlices, configureStore } from '@reduxjs/toolkit';
import skillsSlice from './slices/skillsSlice';
import usersSlice from './slices/usersSlice';
import citiesSlice from './slices/citiesSlice';

export const rootReducer = combineSlices({
  skills: skillsSlice,
  users: usersSlice,
  cities: citiesSlice
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
