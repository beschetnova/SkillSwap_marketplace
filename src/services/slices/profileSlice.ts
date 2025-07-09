import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import type { Profile } from '../../utils/types';
import { login } from '../../api/api';

type ProfileState = {
  profile: Profile | null;
  isAuth: boolean;
  // Temporary, save in localstorage later
  accessToken: string | null;
  error: string | null;
};

const initialState: ProfileState = {
  profile: null,
  isAuth: false,
  accessToken: null,
  error: null
};

export const fetchUser = createAsyncThunk<
  Profile,
  { email: string; password: string },
  { rejectValue: string }
>('user/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const user = await login(email, password);
    const { password: _, ...profile } = user; // для безопасности удаляем пароль
    return profile;
  } catch (e: any) {
    return rejectWithValue(e.message || 'Ошибка авторизации');
  }
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isAuth = false;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isAuth = true;
        state.profile = action.payload;
        state.error = null;
        state.accessToken = localStorage.getItem('token');
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isAuth = false;
        state.error = action.error.message || 'Ошибка';
      });
  },
  selectors: {
    selectProfile: (state) => state.profile,
    selectIsAuth: (state) => state.isAuth
  }
});

export const { selectProfile, selectIsAuth } = profileSlice.selectors;
export const { setProfile, updateProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
