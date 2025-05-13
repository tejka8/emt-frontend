import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import DeleteBookDialog from "../DeleteBookDialog/DeleteBookDialog.jsx";
import {useNavigate} from "react-router";
import EditBookDialog from "../EditBookDialog/EditBookDialog.jsx";

const Book = ({book,onEdit,onDelete}) => {
    const [deleteBookDialog, setDeleteBookDialog] = useState(false);
    const [editBookDialog, setEditBookDialog] = useState(false);
    return (
        <>
            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{book.name}</Typography>
                    <Typography variant="subtitle2">{book.category}</Typography>
                    {/*<Typography variant="body1" fontWeight="bold" sx={{textAlign: "right", fontSize: "1.25rem"}}>{book.author.id}</Typography>*/}
                    <Typography variant="body1" fontWeight="bold" sx={{textAlign: "right", fontSize: "1.25rem"}}>{book.author ? book.author.id : "N/A"}</Typography>
                    <Typography variant="body2" sx={{textAlign: "right"}}>{book.avaliableCopies} piece(s) available</Typography>
                </CardContent>

                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button
                        size="small" color="info" startIcon={<InfoIcon/>}>Info
                    </Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            onClick={()=>setEditBookDialog(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={() => setDeleteBookDialog(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>
            <EditBookDialog
                open={editBookDialog}
                onClose={() => setEditBookDialog(false)}
                book={book}
                onEdit={onEdit}
            />
            <DeleteBookDialog
                open={deleteBookDialog}
                onClose={() => setDeleteBookDialog(false)}
                book={book}
                onDelete={onDelete}
            />


        </>
    );
};

export default Book;