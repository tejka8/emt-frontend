import React from 'react';
import Book from "../BookCard/Book.jsx";
import {Grid} from "@mui/material";

const Books = ({books, onDelete,onEdit}) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {books.map((book) => (
                <Grid key={book.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Book book={book} onDelete={onDelete} onEdit={onEdit}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default Books;