import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
  onlyFavorite: false,
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
    resetFilters: () => {
      return { ...initialState };
      // or
      // state.title='';
    },
    setAuthorFilter: (state, action) => {
      // we can mutate state thanks to immer library:
      state.author = action.payload;
    },
    setOnlyFavoriteFilter: (state) => {
      // we can mutate state thanks to immer library:
      state.onlyFavorite = !state.onlyFavorite; //toggle to opposite true/false
    },
  },
});

//export action creator (the action setTitleFilter have the same name as property of object reducers):
export const setTitleFilter = filterSlice.actions.setTitleFilter;
export const resetFilters = filterSlice.actions.resetFilters;
export const setAuthorFilter = filterSlice.actions.setAuthorFilter;
export const setOnlyFavoriteFilter = filterSlice.actions.setOnlyFavoriteFilter;
// or with destructuring:
// const { setTitleFilter, resetFilters, setAuthorFilter, setOnlyFavoriteFilter } = filterSlice.actions;

export const selectTitleFilter = (state) => state.filter.title;
export const selectAuthorFilter = (state) => state.filter.author;
export const selectOnlyFavoriteFilter = (state) => state.filter.onlyFavorite;

export default filterSlice.reducer;
