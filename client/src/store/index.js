import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./book/bookSlice";
import booksSlice from "./books/booksSlice";

export const store = configureStore({
  reducer: {
    books: booksSlice,
    book: bookSlice,
  },
});
