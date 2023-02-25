import React, { Key, useState } from "react";
import { useLocation } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './book.css';


const Book = () => {
    const book = useLocation().state;    
    return (
        <Box id="mainDiv">
          <Box id="centerDiv">
            <Typography variant="h5" component="div">
              Title: {book?.data?.book_title}
            </Typography>
            <Typography variant="h5" component="div">
              Author: {book?.data?.book_author}
            </Typography>
            <Typography variant="h5" component="div">
              Pages: {book?.data?.book_pages}
            </Typography>
            <Typography variant="h5" component="div">
              Publication:
               <br></br> Year: {book?.data?.book_publication_year}
               <br></br> Country: {book?.data?.book_publication_country}
               <br></br> City: {book?.data?.book_publication_city}
            </Typography>
            </Box>
        </Box>     
    );
  }
  
  export default Book;