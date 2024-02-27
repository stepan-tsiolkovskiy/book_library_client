import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Box className="navbar__container">
        <Link to="/" className="homelink" style={{ color: "white", textDecoration: "none" }}>LIBRARY</Link>

        <Box className="navbar__links">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>HOME</Link>
          <Link to="/catalog" style={{ color: "white", textDecoration: "none" }}>CATALOG</Link>
          <Link to="/book/create" style={{ color: "white", textDecoration: "none" }}>NEW BOOK</Link>
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
