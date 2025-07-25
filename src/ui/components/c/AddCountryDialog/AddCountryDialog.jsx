import {useState} from "react";
import useCountry from "../../../../hooks/useCountry.js";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,

    TextField
} from "@mui/material";

const initialForm = {
    "name":"",
    "continent":"",

};
const AddCountryDialog = ({ open, onClose, onAdd }) => {
    const [formData, setFormData] = useState(initialForm);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onAdd(formData);
        setFormData(initialForm);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Author</DialogTitle>
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
                    label="Continent"
                    name="continent"
                    value={formData.continent}
                    onChange={handleChange}
                    fullWidth
                />

            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">Add</Button>
            </DialogActions>
        </Dialog>
    );
};
export default AddCountryDialog;