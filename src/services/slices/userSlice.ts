import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { Profile } from '../../utils/types';
import { login } from '../../api/api';

type UserState = {
  profile: Profile | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: UserState = {
  profile: null,
  isLoading: false,
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.profile = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Ошибка';
      });
  },
  selectors: { selectUser: (state) => state.profile }
});

export const { selectUser } = userSlice.selectors;
export default userSlice.reducer;
