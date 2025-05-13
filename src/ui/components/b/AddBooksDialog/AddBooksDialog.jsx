import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel, MenuItem, Select,
    TextField
} from "@mui/material";
import useAuthor from "../../../../hooks/useAuthor.js";

const initialFormData = {
    "name": "",
    "price": "",
    "quantity": "",
    "categoryId": "",
    "manufacturerId": "",
};


const AddBookDialog=({open,onClose,onAdd})=>{
    const [formData, setFormData] = useState(initialFormData);
    const { authors = [], loading } = useAuthor();
    const categories = [
        "NOVEL",
        "THRILLER",
        "HISTORY",
        "FANTASY",
        "BIOGRAPHY",
        "CLASSICS",
        "DRAMA"
    ];
    const handleChange = (event)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=()=>{
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add new Book</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Available Copies"
                    name="avaliableCopies"
                    type="number"
                    value={formData.avaliableCopies}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                        variant="outlined"
                    >
                        {categories.map((category) => (
                            <MenuItem key={category} value={category}>
                                {category.charAt(0) + category.slice(1).toLowerCase()}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="dense">
                    <InputLabel>Author</InputLabel>
                    <Select
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        label="Author"
                        variant="outlined"
                    >
                        {!loading && authors.map((author) => (
                            <MenuItem key={author.id} value={author.id}>
                                {author.name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="warning">Edit</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddBookDialog;
