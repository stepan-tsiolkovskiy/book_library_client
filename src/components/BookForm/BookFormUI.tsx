import { Box, Button, Card, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { object, string } from "yup";
import { initialValuesType } from "./BookFormCreate";
import { FC } from "react";
import "./style.css";

type Props = {
  bookData: initialValuesType,
  onSubmit: (values: any, formikHelpers: any) => Promise<void>,
  selectedPhoto: Blob | null,
  onPhotoChange: (event: any) => void,
  fetchStatus?: "error" | "idle" | "pending" | "success"
  isEdit: boolean;
}

const BookFormUI: FC<Props> = ({ bookData, onSubmit, selectedPhoto, onPhotoChange, isEdit }) => (
  <Formik
    initialValues={bookData}
    onSubmit={onSubmit}
    validationSchema={object({
      name: string().required('Please enter name!').min(5, 'Name too short!'),
      year: string()
        .required('Please enter year!')
        .matches(/^\d+$/, 'Year must contain only digits')
        .test('valid-length', 'Year must be 4 digits', (val) => val.length === 4),
    })}
    >
      {({ errors, isValid, touched, dirty }) => (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <Card className="cardContainer">
            <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <div className="imageContainer">
                {selectedPhoto ? (
                  <>
                    <img src={URL.createObjectURL(selectedPhoto)} alt="Selected" />
                  </>
                ) : (
                  <label htmlFor="photo-upload" style={{ cursor: 'pointer' }}>
                    Click here to upload a photo
                    <input
                      type="file"
                      id="photo-upload"
                      accept="image/*"
                      onChange={onPhotoChange}
                      style={{ display: 'none' }}
                    />
                  </label>
                )}
              </div>
              {selectedPhoto && (
                <label htmlFor="photo-upload" style={{ cursor: 'pointer' }}>
                Click here to upload a photo
                <input
                  type="file"
                  id="photo-upload"
                  accept="image/*"
                  onChange={onPhotoChange}
                  style={{ display: 'none' }}
                />
              </label>
              )
              }
            </div>

            <Form encType="multipart/form-data" style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
              <div style={{ width: "80%", height: "80%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <Field
                    name="name"
                    type="text"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Name"
                    fullWidth
                    error={Boolean(errors.name) && Boolean(touched.name)}
                    helperText={Boolean(touched.name) && errors.name}
                  />
                  <Field
                    name="year"
                    type="text"
                    as={TextField}
                    variant="outlined"
                    color="primary"
                    label="Year"
                    fullWidth
                    error={Boolean(errors.year) && Boolean(touched.year)}
                    helperText={Boolean(touched.year) && errors.year}
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={!dirty || !isValid}
                >
                  {isEdit ? 'Update book' : 'Create book'}
                </Button>
              </div>
            </Form>
          </Card>
        </Box>
      )}
  </Formik>
)

export default BookFormUI;
