import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { Profile } from '../../utils/types';

type ProfileState = {
  profile: Profile | null;
  isAuth: boolean;
  // Temporary, save in localstorage later
  accessToken: string | null;
};

const initialState: ProfileState = {
  profile: null,
  isAuth: false,
  accessToken: null
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: { payload: Profile }) => {
      state.profile = action.payload;
      state.isAuth = true;
      state.accessToken = 'mock.access.jwt';
    },
    updateProfile: (state, action: { payload: Partial<Profile> }) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
    clearProfile: (state) => {
      state.profile = null;
      state.isAuth = false;
    },
    toggleFavorite: (state, action: { payload: number }) => {
      if (!state.profile) return;

      const id = action.payload;
      const favorites = state.profile.favorites;

      const isAlreadyFavorite = favorites.includes(id);
      state.profile.favorites = isAlreadyFavorite
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id];
    }
  },
  selectors: {
    selectProfile: (state) => {
      return state.profile;
    },
    selectIsAuth: (state) => {
      return state.isAuth;
    }
  }
});

export default profileSlice.reducer;
export const { setProfile, updateProfile, clearProfile, toggleFavorite } =
  profileSlice.actions;

export const selectFavorites = createSelector(
  (state: RootState) => state.profile.profile?.favorites,
  (favorites) => favorites ?? []
);
