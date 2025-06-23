import { createSlice } from '@reduxjs/toolkit';
import type { SkillCategories } from '../../utils/types';

type SkillsState = {
  skills: SkillCategories;
  isLoading: boolean;
  error: string | undefined;
};

const initialState: SkillsState = {
  skills: [],
  isLoading: false,
  error: undefined
};

export const skillsSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {},
  selectors: {
    selectAllSkills: (state) => state.skills
  }
});

export const { selectAllSkills } = skillsSlice.selectors;
export default skillsSlice.reducer;
