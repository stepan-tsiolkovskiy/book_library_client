import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import * as bookActions from '../../../redux/books'
import { Box } from "@mui/material";

import './global.css'
import Navbar from "../../../components/Navbar/Navbar";

export const Layout = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(bookActions.getAllBooks());
  }, [dispatch]);
  
  return (
    <Box className="app">
      <Navbar />
      
      <Box className="layout-container">
        <Box className="wrapper">
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};
