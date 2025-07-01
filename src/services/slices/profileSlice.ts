import { createSlice } from '@reduxjs/toolkit';

import type { Profile } from '../../utils/types';

type ProfileState = {
  profile: Profile | null;
  isAuth: boolean;
};

const initialState: ProfileState = {
  profile: null,
  isAuth: false,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
});

export default profileSlice.reducer;
