import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { getUsers } from '../../api/api';
import type { Users } from '../../utils/types';
import type { RootState } from '../store';

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

export const fetchUsers = createAsyncThunk('users/fetchUsers', getUsers);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  }
});

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectAllUsersCity = createSelector([selectAllUsers], (users) => [
  ...new Set(users.map((user) => user.city))
]);

export default usersSlice.reducer;
