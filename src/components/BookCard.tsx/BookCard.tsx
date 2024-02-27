import { useNavigate } from 'react-router-dom';
import BookCardUI from './BookCardUI';
import { useAppDispatch } from '../../redux/hooks';
import * as bookActions from '../../redux/books'

import toast, { Toaster } from 'react-hot-toast';

type Props = {
  id: string,
  image: string,
  name: string,
  year: string
}

export const BookCard: React.FC<Props> = (props) => {
  const { id, image, name, year } = props;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleRedirectToEditPage = () => {
    navigate(`/book/${id}`);
  };

  const handleDeleteBook = async () => {
    try {
      await dispatch(bookActions.deleteBook({ bookId: id}));
      toast.success('Successfully deleted!');
    } catch (error) {
      toast.error('An error occurred. Please try again later!');
      console.error('Error deleting book:', error);
    }
  };

  return (
    <>
      <Toaster />

      <BookCardUI 
        onRedirectToEdit={handleRedirectToEditPage}
        imageURL={`${import.meta.env.VITE_API}${image}`}
        name={name}
        year={year}
        onDelete={handleDeleteBook}
      />
    </>
  );
};