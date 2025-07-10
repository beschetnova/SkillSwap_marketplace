import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { Profile, UserCardSkill } from '../../utils/types';
import { login, logout } from '../../api/api';

type ProfileState = {
  profile: Profile | null;
  isAuth: boolean;
  accessToken: string | null;
  error: string | null;
};

const savedProfile = localStorage.getItem('profile');

const initialState: ProfileState = {
  profile: savedProfile ? (JSON.parse(savedProfile) as Profile) : null,
  isAuth: !!savedProfile,
  accessToken: savedProfile ? 'mock.access.jwt' : '',
  error: null
};

export const fetchUser = createAsyncThunk<
  Profile,
  { email: string; password: string },
  { rejectValue: string }
>('user/loginUser', async ({ email, password }, { rejectWithValue }) => {
  try {
    const user = await login(email, password);
    const { ...profile } = user;
    profile.password = '';
    return profile;
  } catch (e) {
    return e instanceof Error
      ? rejectWithValue(e.message)
      : rejectWithValue('Ошибка авторизации');
  }
});

export const logoutUser = createAsyncThunk('user/logout', logout);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: { payload: Profile }) => {
      state.profile = action.payload;
      state.isAuth = true;
      // state.accessToken = 'mock.access.jwt';
      state.accessToken = localStorage.getItem('token') || null;
      localStorage.setItem('profile', JSON.stringify(state.profile));
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
    toggleFavorite: (state, action: { payload: string }) => {
      if (!state.profile) return;

      const id = action.payload;
      const favorites = state.profile.favorites;

      const isAlreadyFavorite = favorites.includes(id);
      state.profile.favorites = isAlreadyFavorite
        ? favorites.filter((favId) => favId !== id)
        : [...favorites, id];
    },
    setUserSkillToTeach: (
      state,
      action: { payload: { skill: UserCardSkill } }
    ) => {
      if (state.profile) {
        state.profile.skillsToTeach = [action.payload.skill];
        localStorage.setItem('profile', JSON.stringify(state.profile));
      } else {
        console.error('state.profile is null');
      }
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
      })
      .addCase(logoutUser.pending, (state) => {
        state.error = null;
        state.isAuth = true;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.error.message || 'Ошибка';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isAuth = false;
        state.profile = null;
        state.accessToken = null;
      });
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
export const {
  setProfile,
  updateProfile,
  clearProfile,
  toggleFavorite,
  setUserSkillToTeach
} = profileSlice.actions;

export const selectFavorites = (state: RootState): string[] =>
  state.profile.profile?.favorites ?? [];

export const { selectProfile, selectIsAuth, selectProfileId } =
  profileSlice.selectors;
