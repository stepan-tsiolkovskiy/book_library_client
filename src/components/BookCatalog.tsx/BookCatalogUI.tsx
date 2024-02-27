import { Box } from "@mui/material";
import BookList from "../BookList.tsx/BookList";
import { FC } from "react";
import { IBook } from "../../shared/types/book.interface";

type Props = {
  books: IBook[],
}

const BookCatalogUI: FC<Props> = ({ books }) => (
  <Box display="flex" padding="50px 0" gap="50px">  
    <BookList books={books} />
  </Box> 
)

export default BookCatalogUI