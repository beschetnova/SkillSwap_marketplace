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
    }
  },
  selectors: {
    selectProfile: (state) => {
      return state.profile;
    },
    selectIsAuth: (state) => {
      return state.isAuth;
    },
    selectProfileId: (state) => {
      return state.profile?.id;
    }
  }
});

export default profileSlice.reducer;
