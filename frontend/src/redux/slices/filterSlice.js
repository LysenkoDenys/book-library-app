import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      // return { ...state, title: action.payload };
      // or:
      // we can mutate state thanks to immer library:
      state.title = action.payload;
      // we can also return new state as usually:
      // state = {
      //   title: action.payload,
      // };
      // return state;
    },
    resetFilters: (state) => {
      return { ...initialState };
      // or
      // state.title='';
    },
  },
});

//export action creator (the action setTitleFilter have the same name as property of object reducers):
export const setTitleFilter = filterSlice.actions.setTitleFilter;
export const resetFilters = filterSlice.actions.resetFilters;
// or with destructuring:
// const { setTitleFilter, resetFilters } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;
