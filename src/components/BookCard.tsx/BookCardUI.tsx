import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { FC } from "react";

type Props = {
  onRedirectToEdit: () => void;
  imageURL: string;
  name: string;
  year: string;
  onDelete: () => void
}
 
const BookCardUI: FC<Props> = ({ onRedirectToEdit, imageURL, name, year, onDelete }) => (
  <>
    <Card sx={{ maxWidth: 245 }}>

      <CardMedia
        component="img"
        alt="Book Cover"
        height="200"
        image={imageURL}
      />

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>

        <Box display="flex" justifyContent="space-between">
          <Typography gutterBottom color="text.secondary" fontSize="14px">
            Arthur Conan Doyle
          </Typography>

          <Typography gutterBottom color="text.secondary" fontSize="14px">
            {year}
          </Typography>
        </Box>

        <Typography color="text.secondary" textAlign="left" fontSize="14px">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>

      <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="outlined" color="success" onClick={onRedirectToEdit}>
          Review
        </Button>

        <Button variant="outlined" color="error" onClick={onDelete}> 
          Delete
        </Button>
      </CardActions>
    </Card>
  </>
)

export default BookCardUI