import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    setAddBook: (state, action) => {
      //thanks to immar:
      // state.push(action.payload);
      return [...state, action.payload];
    },
    setDeleteBook: (state, action) => {
      //thanks to immar:
      // const index = state.findIndex((book) => book.id === action.payload);
      // if (index !== -1) {
      //   state.splice(index, 1);
      // }
      return [...state].filter((book) => book.id !== action.payload);
    },
    setToggleFavoriteBook: (state, action) => {
      //thanks to immar:
      // state.forEach((book) => {
      //   if (book.id === action.payload) {
      //     book.isFavorite = !book.isFavorite;
      //   }
      // });
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );
    },
  },
});

//export action creator (the action setTitleFilter have the same name as property of object reducers):
export const setAddBook = booksSlice.actions.setAddBook;
export const setDeleteBook = booksSlice.actions.setDeleteBook;
export const setToggleFavoriteBook = booksSlice.actions.setToggleFavoriteBook;
//or:
// export const { setAddBook, setDeleteBook, setToggleFavoriteBook } =
//   booksSlice.actions;

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
