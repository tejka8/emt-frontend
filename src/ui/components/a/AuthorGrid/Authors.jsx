import React from 'react';
import Author from '../AuthorCard/Author.jsx';
import {Grid} from "@mui/material";

const Authors = ({authors, onEdit,onDelete}) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {authors.map((author) => (
                <Grid key={author.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Author author={author} onDelete={onDelete} onEdit={onEdit}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default Authors;