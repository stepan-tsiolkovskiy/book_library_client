import { Box, Button, Typography } from '@mui/material';
import main_foto from '../../../assets/images/main.foto.desctop.jpg';
import { useNavigate } from 'react-router-dom';
import './style.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box className="main-photo" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${main_foto})`}}>
      <Box className="main-content">
        <h1 className="homepage-title">WELCOME <br /> TO <br /> THE OUR LIBRARY</h1>
        <Typography className="homepage-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quas quam modi laudantium, cupiditate minus</Typography>
        <Button
          variant="contained"
          style={{ backgroundColor: 'white', color: 'black' }}
          onClick={() => navigate('/catalog')}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
