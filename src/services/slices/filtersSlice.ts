import { createSlice } from '@reduxjs/toolkit';

type FiltersState = {
  type: string;
  skills: string[];
  gender: string;
  cities: string[];
};

const initialState: FiltersState = {
  type: 'Все',
  skills: [],
  gender: 'Не имеет значения',
  cities: []
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setType: (state, action) => {
      state.type = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setSkills: (state, action) => {
      state.skills = action.payload;
    },
    setCities: (state, action) => {
      state.cities = action.payload;
    }
  },
  selectors: {
    selectFilters: (state) => state
  }
});

export const { setType, setGender, setCities, setSkills } =
  filtersSlice.actions;
export const { selectFilters } = filtersSlice.selectors;
export default filtersSlice.reducer;
