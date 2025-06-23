import { createSlice } from '@reduxjs/toolkit';
import type { Users } from '../../utils/types';

type UsersState = {
  users: Users;
  isLoading: boolean;
  error: string | undefined;
};

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: undefined
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {
    selectAllUsers: (state) => state.users
  }
});

export const { selectAllUsers } = usersSlice.selectors;
export default usersSlice.reducer;
