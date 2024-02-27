import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import * as BOOK_SERVICE from '../services/book'
import { IBook } from "../shared/types/book.interface";

export const getAllBooks = createAsyncThunk(
  'books',
  () => {
    return BOOK_SERVICE.getBooks();
  }
)

export const createBook = createAsyncThunk(
  "createBook",
  async ({ newBook }: {newBook: FormData}) => {
    const response = BOOK_SERVICE.createBook(newBook)
    return response;
  }
)

export const updateBook = createAsyncThunk(
  'updateBook',
  async ({ bookId, updatedBook }: { bookId: string, updatedBook: any}) => {
    const response = BOOK_SERVICE.updateBook(bookId, updatedBook);
    return response;
  }
)

export const deleteBook= createAsyncThunk(
  'deleteBook',
  async ({ bookId }: { bookId: string}) => {
    await BOOK_SERVICE.deleteBookById(bookId);

    return bookId;
  }
)

type ProductState =  {
  books: IBook[];
  loading: boolean;
  error: string;
}

const initialState: ProductState = {
  books: [],
  loading: false,
  error: '',
}

const productsSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.books = action.payload;
        state.loading = false;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.loading = false;
        state.error = 'Error';
      })
      .addCase(deleteBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.loading = false;
        state.books = state.books.filter(book => book.id !== action.payload)
      })
      .addCase(deleteBook.rejected, (state) => {
        state.loading = false;
        state.error = 'error';
      })
      // .addCase(createBook.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(createBook.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.books = [...state.books, action.payload]
      // })
      // .addCase(createBook.rejected, (state) => {
      //   state.loading = false;
      //   state.error = 'error';
      // })
      // .addCase(updateBook.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(updateBook.fulfilled, (state, action) => {
      //   state.loading = false;
      //   console.log(action.payload.book)
      // })
      // .addCase(updateBook.rejected, (state) => {
      //   state.loading = false;
      //   state.error = 'error';
      // });
  },
})

export default productsSlice.reducer;