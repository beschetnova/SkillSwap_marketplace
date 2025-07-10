import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { getUsers } from '../../api/api';
import type { User, UserCardSkill, Users } from '../../utils/types';
import type { RootState } from '../store';

type UsersState = {
  users: Users;
  isLoading: boolean;
  error: string | undefined;
};

const savedUsers = localStorage.getItem('users');

const initialState: UsersState = {
  users: savedUsers ? (JSON.parse(savedUsers) as Users) : [],
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
      action: { payload: { id: string; skill: UserCardSkill } }
    ) => {
      const { id, skill } = action.payload;
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user.skillsToTeach = [skill];
        localStorage.setItem('users', JSON.stringify(state.users));
      }
    },
    addUser: (state, action: { payload: User }) => {
      state.users.unshift(action.payload);
      localStorage.setItem('users', JSON.stringify(state.users));
    },
    updateUser: (state, action: { payload: User }) => {
      const index = state.users.findIndex(
        (user) => user.id === action.payload.id
      );
      if (index !== -1) {
        state.users[index] = action.payload;
      } else {
        state.users.unshift(action.payload);
      }
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
        const fetchedUsers = action.payload;
        const existingIds = new Set(state.users.map((u) => u.id));
        const newUsers = fetchedUsers.filter((u) => !existingIds.has(u.id));

        state.users = [...state.users, ...newUsers];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
  selectors: {
    getUserById: (state, id: string) => {
      return state.users.find((user) => user.id === id);
    }
  }
});

export const selectAllUsers = (state: RootState) => state.users.users;
export const selectAllUsersCity = createSelector([selectAllUsers], (users) => [
  ...new Set(users.map((user) => user.city))
]);

export const selectUsersWithSameOffer = createSelector(
  [selectAllUsers, (_: RootState, user: User) => user],
  (allUsers, user): Users => {
    const result: Users = [];

    user.skillsToTeach.forEach((skill) => {
      allUsers.forEach((otherUser) => {
        if (user.id !== otherUser.id) {
          const hasSameSkill = otherUser.skillsToTeach.some(
            (otherSkill) => otherSkill.skill === skill.skill
          );
          if (hasSameSkill) {
            result.push(otherUser);
          }
        }
      });
    });

    return result;
  }
);
export const { getUserById } = usersSlice.selectors;
export const { setUserSkillToTeach, addUser, updateUser } = usersSlice.actions;

export default usersSlice.reducer;
