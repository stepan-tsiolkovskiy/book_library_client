import { useState } from "react";

import { FormikHelpers } from "formik";

import * as bookActions from '../../redux/books'
import { useAppDispatch } from "../../redux/hooks";

import toast, { Toaster } from 'react-hot-toast';
import BookFormUI from "./BookFormUI";

export type initialValuesType = {
  name: string,
  year: string,
  image: Blob | null,
}

const BookFormCreate = () => {
  const dispatch = useAppDispatch();

  const bookData: initialValuesType = ({
    name: "",
    year: "",
    image: null,
  });
  const [selectedPhoto, setSelectedPhoto] = useState<Blob | null>(null);

  const handleSubmit = async (values: initialValuesType, formikHelpers: FormikHelpers<initialValuesType>) => {
    try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("year", values.year);

        if (selectedPhoto !== null) {
          formData.append("image", selectedPhoto);
        }

        await dispatch(bookActions.createBook({ newBook: formData }));
        await dispatch(bookActions.getAllBooks())

        formikHelpers.resetForm();
        setSelectedPhoto(null)

        toast.success('Successfully created!');
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

      <BookFormUI
        bookData={bookData}
        onSubmit={handleSubmit}
        selectedPhoto={selectedPhoto}
        onPhotoChange={handlePhotoChange}
        //fetchStatus={status}
        isEdit={false}
      />
    </>
  );
};

export default BookFormCreate;
