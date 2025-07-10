import {
  createAsyncThunk,
  createSelector,
  createSlice
} from '@reduxjs/toolkit';
import { getUsers } from '../../api/api';
import type { User, UserCardSkill, Users } from '../../utils/types';
import type { RootState } from '../store';
import type { FiltersState } from './filtersSlice';

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
      action: { payload: { id: string; skill: UserCardSkill } }
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

export const getFilteredUsers = createSelector(
  [selectAllUsers, (_: RootState, filters: FiltersState) => filters],
  (allUsers, filters: FiltersState) => {
    return allUsers.filter((user: User) => {
      if (filters.gender !== 'Не имеет значения') {
        const genderMap: { [key: string]: string } = {
          Мужской: 'male',
          Женский: 'female'
        };
        if (user.gender !== genderMap[filters.gender]) {
          return false;
        }
      }

      if (filters.cities.length > 0 && !filters.cities.includes(user.city)) {
        return false;
      }

      if (filters.skills.length > 0) {
        const skillsToTeachIds = user.skillsToTeach.map((s) => s.subcategory);
        const skillsToLearnIds = user.skillsToLearn.map((s) => s.subcategory);

        const hasSkill = (skillId: string) =>
          skillsToTeachIds.includes(skillId) ||
          skillsToLearnIds.includes(skillId);

        const hasSkillToTeach = (skillId: string) =>
          skillsToTeachIds.includes(skillId);

        const hasSkillToLearn = (skillId: string) =>
          skillsToLearnIds.includes(skillId);

        switch (filters.type) {
          case 'Могу научить':
            if (!filters.skills.some(hasSkillToTeach)) {
              return false;
            }
            break;
          case 'Хочу научиться':
            if (!filters.skills.some(hasSkillToLearn)) {
              return false;
            }
            break;
          case 'Всё':
          default:
            if (!filters.skills.some(hasSkill)) {
              return false;
            }
            break;
        }
      }

      if (filters.search) {
        const findInSkillsToLearn = user.skillsToLearn.some((skillItem) =>
          skillItem.skill
            .toLocaleLowerCase()
            .includes(filters.search.toLocaleLowerCase())
        );
        const findInSkillsToTeach = user.skillsToTeach.some((skillItem) =>
          skillItem.skill
            .toLocaleLowerCase()
            .includes(filters.search.toLocaleLowerCase())
        );

        return findInSkillsToLearn || findInSkillsToTeach;
      }

      return true;
    });
  }
);
export const { getUserById } = usersSlice.selectors;
export const { setUserSkillToTeach } = usersSlice.actions;

export default usersSlice.reducer;
