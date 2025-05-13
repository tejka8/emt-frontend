import useCountry from "../../../../hooks/useCountry.js";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import {useState} from "react";

const EditAuthorDialog=({open, onClose, author,onEdit})=>{
    const[formData, setFormData]=useState({
        "name":author.name,
        "surname":author.surname,
        "countryId":author.country
    })
    const {countries=[],loading}=useCountry();

    const handleChange = (event)=>{
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit = ()=>{
        onEdit(author.id,formData)
        setFormData(formData)
        onClose()
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Author</DialogTitle>
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
                    label="Surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Country</InputLabel>
                    <Select
                        name="countryId"
                        value={formData.countryId}
                        onChange={handleChange}
                        label="Country"
                        variant="outlined"
                    >
                        {!loading && countries.map((country) => (
                            <MenuItem key={country.id} value={country.id}>
                                {country.name}
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

export default EditAuthorDialog;