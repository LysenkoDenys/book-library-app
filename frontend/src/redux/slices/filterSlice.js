import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
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
    setAuthorFilter: (state, action) => {
      // we can mutate state thanks to immer library:
      state.author = action.payload;
    },
  },
});

//export action creator (the action setTitleFilter have the same name as property of object reducers):
export const setTitleFilter = filterSlice.actions.setTitleFilter;
export const resetFilters = filterSlice.actions.resetFilters;
export const setAuthorFilter = filterSlice.actions.setAuthorFilter;
// or with destructuring:
// const { setTitleFilter, resetFilters, setAuthorFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;

export default filterSlice.reducer;
