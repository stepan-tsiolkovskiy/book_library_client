import { Card, Grid } from "@mui/material";
import { FC } from "react";
import { IBook } from "../../shared/types/book.interface";
import { BookCard } from "../BookCard.tsx/BookCard";

type Props = {
  books: IBook[]
}

const BookList: FC<Props> = ({ books }) => (
  <Card style={{ padding: "0 20px", width: "100%" }}>
    <Grid container spacing={2}>
      {books && books.map((book) => (
        <Grid key={book.id} item xs={12} sm={6} md={3} display="flex" justifyContent="center">
          <BookCard id={book.id} image={book.image} name={book.name} year={book.year}/>
        </Grid>
      ))}
    </Grid>
  </Card>
)

export default BookList;