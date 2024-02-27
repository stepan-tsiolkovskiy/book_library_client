import BookCatalogUI from "./BookCatalogUI";
import { useAppSelector } from "../../redux/hooks";
import { Box, CircularProgress, Typography } from '@mui/material';

const BookCatalog = () => {
  const { books, loading, error } = useAppSelector((state) => state.books);

  console.log(books)

  if (loading) {
    return (
      <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
        <CircularProgress />;
      </Box>
    )
  }

  if (error) {
    return (
      <Box height="100%" width="100%" display="flex" justifyContent="center" alignItems="center">
        <Typography>Sorry something went wrong!</Typography>
      </Box>
    )
  }

  return (
    <>
      <BookCatalogUI 
        books={books}
      /> 
    </>
  );
};


export default BookCatalog;