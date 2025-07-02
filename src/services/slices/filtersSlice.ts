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
  reducers: {},
  selectors: {
    selectFilters: (state) => state
  }
});

export default filtersSlice.reducer;
