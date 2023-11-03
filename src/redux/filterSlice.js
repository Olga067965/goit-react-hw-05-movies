import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContact(state, { payload }) {
      // return payload;
      state.filter = payload;
    },
  },
});
export const { filterContact } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;