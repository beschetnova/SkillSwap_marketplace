import {
  createSelector,
  createSlice,
  createAsyncThunk
} from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { Profile, UserCardSkill } from '../../utils/types';
import { login } from '../../api/api';

type ProfileState = {
  profile: Profile | null;
  isAuth: boolean;
  accessToken: string | null;
  error: string | null;
};

const initialState: ProfileState = {
  profile: null,
  isAuth: false,
  accessToken: null,
  error: null
  /*profile: {
      id: 'testId',
      name: 'Мария',
      city: 'Москва',
      gender: 'female',
      birthDate: '1995-10-28',
      bio: 'Люблю учиться новому, особенно если это можно делать за чаем и в пижаме. Всегда готова пообщаться и обменяться чем‑то интересным!',
      skillsToTeach: [
        {
          skill: 'Игра на барабанах',
          categoryId: 'creativity-and-art',
          subcategory: 'music-and-sound'
        }
      ],
      skillsToLearn: [
        {
          skill: 'Тайм менеджмент',
          categoryId: 'business-and-career',
          subcategory: 'time-management'
        },
        {
          skill: 'Медитация',
          categoryId: 'health-and-lifestyle',
          subcategory: 'yoga-and-meditation'
        },
        {
          skill: 'Фотография',
          categoryId: 'creativity-and-art',
          subcategory: 'photography'
        },
        {
          skill: 'Видеомонтаж',
          categoryId: 'creativity-and-art',
          subcategory: 'video-editing'
        }
      ],
      photo: 'Maria-Moscow.png',
      email: 'Mariia@gmail.com',
      favorites: ['1', '2']
    },
    isAuth: true,
    accessToken: 'mock.access.jwt',
    error: null
    */
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

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: { payload: Profile }) => {
      state.profile = action.payload;
      state.isAuth = true;
      state.accessToken = localStorage.getItem('token') || null;
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
      //Не знаю есть ли вариант лучше чем if проверка
      if (state.profile) {
        state.profile.skillsToTeach = [action.payload.skill];
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

export const selectFavorites = createSelector(
  (state: RootState) => state.profile.profile?.favorites,
  (favorites) => favorites ?? []
);

export const { selectProfile, selectIsAuth, selectProfileId } =
  profileSlice.selectors;
