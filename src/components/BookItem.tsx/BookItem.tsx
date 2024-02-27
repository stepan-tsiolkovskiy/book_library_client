import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import BookItemUI from "./BookItemUI";

const BookItem = () => {
  const { id } = useParams<{ id: string }>();
  const book = useAppSelector(state => state.books.books.find(book => book.id === id));

  const navigate = useNavigate();

  const handleRedirectToEditForm = () => {
    navigate(`/book/edit/${id}`)
  }

  return (
    <>
    {book && (
      <BookItemUI 
        book={book!}
        onEditRedirect={handleRedirectToEditForm}
        imageURL={`${import.meta.env.VITE_API}${book?.image}`}
      />
    )}
      
    </>
  )
}

export default BookItem;