import { combineSlices, configureStore } from '@reduxjs/toolkit';
import skillsSlice from './slices/skillsSlice';
import usersSlice from './slices/usersSlice';

export const rootReducer = combineSlices({
  skills: skillsSlice,
  users: usersSlice
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
