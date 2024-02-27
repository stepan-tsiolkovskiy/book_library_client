import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import BookFormUI from "./BookFormUI.tsx";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import * as bookActions from '../../redux/books'

import toast, { Toaster } from 'react-hot-toast';

export type initialValuesType = {
  name: string,
  year: string,
  image: Blob | null,
}

const BookFormEdit = () => {
  const { id } = useParams();
  const book = useAppSelector(state => state.books.books.find(book => book.id === id));

  const [isLoadedData, setIsLoadedData] = useState(false)
  const [selectedPhoto, setSelectedPhoto] = useState<Blob | null>(null);

  const dispatch = useAppDispatch();

  const [bookData, setBookData] = useState<initialValuesType>({
    name: "",
    year: "",
    image: null,
  });


  useEffect(() => {
    if (book) {
      setBookData({
        name: book.name,
        year: book.year,
        image: null
      })

      setIsLoadedData(true)
    }
  }, [book])
 
  // useEffect(() => {
  //   const fetchBook = async () => {
  //     try {
  //       const response = await BOOK_SERVICE.getBookById(id!);
  //       setBook(response);
  //     } catch (error) {
  //       console.error('Error fetching book:', error);
  //     }
  //   };

  //   if (id) {
  //     fetchBook(); 
  //   }
  // }, [id]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
          const response = await axios.get(`${import.meta.env.VITE_API}${book?.image}`, {
            
          responseType: 'arraybuffer'
        });

        const blob = new Blob([response.data], { type: 'image/png' });
        setSelectedPhoto(blob)
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    book && fetchImage();
  }, [book]);

  const handleSubmit = async (values: initialValuesType) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("year", values.year);

      if (selectedPhoto !== null) {
        formData.append("image", selectedPhoto);
      }

      if (!id) {
        return;
      }
      
      await dispatch(bookActions.updateBook({ bookId: id, updatedBook: formData }))
      await dispatch(bookActions.getAllBooks())

      toast.success('Successfully edited!');
    } catch (error) {
      console.error("Error:", error);
      toast.error('An error occurred. Please try again later!');
    }
  };
  
  const handlePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedPhoto(file);
    }
  };

  return (
    <>
      <Toaster />

      {isLoadedData && (
        <BookFormUI
          bookData={bookData}
          onSubmit={handleSubmit}
          selectedPhoto={selectedPhoto}
          onPhotoChange={handlePhotoChange}
          isEdit={true}
          // fetchStatus={status}
        />
      )}
    </>
  );
}

export default BookFormEdit;
