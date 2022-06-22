import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "../services/booksService";

export const getBooks = createAsyncThunk("GET_BOOKS", async (_, thunkAPI) => {
  try {
    return await booksService.getBooks();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: null,
    isError: false,
    isLoading: false,
    message: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.books = null;
      });
  },
});

export default booksSlice.reducer;
