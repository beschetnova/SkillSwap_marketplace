import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { getUsers } from '../../api/api';
import type { Users, User, UserCardSkill } from '../../utils/types';
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
  reducers: {
    setUserSkillToTeach: (
      state,
      action: { payload: { id: number; skill: UserCardSkill } }
    ) => {
      const { id, skill } = action.payload;
      const user = state.users.find((user) => user.id === id);
      if (user) user.skillsToTeach = [skill];
    }
  },
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
    selectUsersWithSameOffer: (state, user: User) => {
      const result: Users = [];
      const allUsers = state.users;
      user.skillsToTeach.forEach((skill) => {
        allUsers.forEach((otherUser) => {
          if (user.id !== otherUser.id) {
            otherUser.skillsToTeach.forEach((otherSkill) => {
              if (otherSkill.skill === skill.skill) result.push(otherUser);
            });
          }
        });
      });

      return result;
    },
    getUserById: (state, id: number) => {
      return state.users.find((user) => user.id === id);
    }
  }
});

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectAllUsersCity = createSelector([selectAllUsers], (users) => [
  ...new Set(users.map((user) => user.city))
]);
export const { selectUsersWithSameOffer, getUserById } = usersSlice.selectors;
export const { setUserSkillToTeach } = usersSlice.actions;

export default usersSlice.reducer;
