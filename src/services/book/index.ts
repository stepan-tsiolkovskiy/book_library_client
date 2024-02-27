import { IBook } from "../../shared/types/book.interface";
import { client } from "../../utils/axios.client";

export const getBooks = () => {
  return client.get<IBook[]>('/books?page=1&books=50');
};

export const getBookById = (bookId: string) => {
  return client.get<IBook>(`books/${bookId}`)
}

export const createBook = (book: any) => {
  return client.post<any>('/books', book);
};

export const updateBook = (bookId: string, updatedBook: any) => {
  //console.log(`ID==${id}`)
  //console.log(`BOOK===${updateBook}`)
  return client.put<any>(`/books/${bookId}`, updatedBook);
};

export const deleteBookById = (bookId: string) => {
  return client.delete(`books/${bookId}`);
}