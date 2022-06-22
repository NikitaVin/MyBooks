import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import booksService from "../services/booksService";

export const getBook = createAsyncThunk("GET_BOOK", async (id, thunkAPI) => {
  try {
    return await booksService.getBook(id);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const createBook = createAsyncThunk(
  "CREATE_BOOK",
  async (bookData, thunkAPI) => {
    try {
      return await booksService.createBook(bookData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: {
    book: null,
    isError: false,
    isLoading: false,
    message: "",
    errors: null,
  },
  reducers: {
    resetBookErrors: (state) => {
      state.errors = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.book = action.payload[0];
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.message = action.payload.message;
        state.book = null;
      })
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
        state.errors = null;
      })
      .addCase(createBook.fulfilled, (state) => {
        state.isLoading = false;
        state.errors = null;
      })
      .addCase(createBook.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.errors = action.payload;
      });
  },
});

export const { resetBookErrors } = bookSlice.actions;
export default bookSlice.reducer;
