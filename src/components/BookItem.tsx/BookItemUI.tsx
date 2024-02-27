import { Box, Button, Card, Typography } from "@mui/material";
import { FC } from "react";
import { IBook } from "../../shared/types/book.interface";

type Props = {
  book: IBook,
  onEditRedirect: () => void,
  imageURL: string
}

const BookItemUI: FC<Props> = ({ book, onEditRedirect, imageURL }) => {
  console.log(imageURL)
  return (
<>
    {book && (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%">
        <Card style={{ height: "90%", width: "90%", display: "flex" }}>
          <Box flex="1" width="60%" height="90%" display="flex" justifyContent="center">
            <Box width="300px" height="400px">
              <img src={imageURL} alt="" height="100%" width="100%"/>
              {/* <CardMedia
                component="img"
                alt="Book Cover"
                image={imageURL}
                height="100%"
                width="100%"
              /> */}
            </Box>
          </Box>
          <Box flex="2">
            <Box style={{ padding: "0 50px", display: "flex", flexDirection: "column", gap: "50px" }}>
              <Box style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <Typography variant="h4">{book.name}</Typography>
                <Typography variant="h6" color="gray">{"Arthur Conan Doyle"}</Typography> 
              </Box>
              <Box>
                <Typography variant="h6" color="gray">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi impedit doloribus cum, quod reprehenderit nemo deleniti veniam! Earum atque fuga placeat dignissimos illo obcaecati nemo blanditiis accusantium ullam! Eaque, ratione?</Typography>
              </Box>
              <Box width="200px">
                <Button variant="outlined" color="success" onClick={onEditRedirect} style={{width: "100%"}}>
                  Edit
                </Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    )}
  </>
)
    }

export default BookItemUI;