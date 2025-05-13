import React, {useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import EditAuthorDialog from "../EditAuthorDialog/EditAuthorDialog.jsx";
import DeleteAuthorDialog from "../DeleteAuthorDialog/DeleteAuthorDialog.jsx";

const Author = ({author,onEdit, onDelete}) => {
    const [deleteAuthorDialog, setDeleteAuthorDialog]= useState(false);
    const[editAuthorDialog, setEditAuthorDialog]= useState(false);
    return (
        <>

            <Card sx={{boxShadow: 3, borderRadius: 2, p: 1}}>
                <CardContent>
                    <Typography variant="h5">{author.name} {author.surname}</Typography>
                    <Typography variant="body1" fontWeight="bold" sx={{textAlign: "right", fontSize: "1.25rem"}}>{author.countryId}</Typography>
                </CardContent>
                <CardActions sx={{justifyContent: "space-between"}}>
                    <Button size="small" color="info" startIcon={<InfoIcon/>}>Info</Button>
                    <Box>
                        <Button
                            size="small"
                            color="warning"
                            startIcon={<EditIcon/>}
                            sx={{mr: "0.25rem"}}
                            onClick={()=>setEditAuthorDialog(true)}
                        >
                            Edit
                        </Button>
                        <Button
                            size="small"
                            color="error"
                            startIcon={<DeleteIcon/>}
                            onClick={()=>setDeleteAuthorDialog(true)}
                        >
                            Delete
                        </Button>
                    </Box>
                </CardActions>
            </Card>

            <EditAuthorDialog
                open={editAuthorDialog}
                onClose={()=>setEditAuthorDialog(false)}
                author={author}
                onEdit={onEdit}
            />
            <DeleteAuthorDialog
                open={deleteAuthorDialog}
                onClose={()=>setDeleteAuthorDialog(false)}
                author={author}
                onDelete={onDelete}
            />
        </>
    );
};
export default Author;