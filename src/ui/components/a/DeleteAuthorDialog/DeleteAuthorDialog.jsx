import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";
import React from "react";

const DeleteAuthorDialog=({open, onClose, author,onDelete})=>{
    const handleSubmit =()=>{
        onDelete(author.id)
        onClose()
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Delete Author</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete <strong>{author.name} {author.surname}</strong>? This action cannot be undone.
                </DialogContentText>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={handleSubmit} color="error" variant="contained">Delete</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    );
};
export default DeleteAuthorDialog;