import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUsers } from '../../api/api';
import type { User } from '../../utils/types';

type UsersState = {
  users: User[];
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
  },
  selectors: {
    selectAllUsers: (state) => state.users
  }
});

export const { selectAllUsers } = usersSlice.selectors;
export default usersSlice.reducer;
