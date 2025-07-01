import { createSlice } from '@reduxjs/toolkit';

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
    setProfile: (state, action) => {
      state.profile = action.payload;
      state.isAuth = true;
      state.accessToken = 'mock.access.jwt';
    },
    updateProfile: (state, action) => {
      if (state.profile) {
        state.profile = { ...state.profile, ...action.payload };
      }
    },
    clearProfile: (state) => {
      state.profile = null;
      state.isAuth = false;
    }
  },
  selectors: {
    selectProfile: (state) => {
      state.profile;
    },
    selectIsAuth: (state) => {
      state.isAuth;
    }
  }
});

export default profileSlice.reducer;
