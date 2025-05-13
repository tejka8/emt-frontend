import {Box, Button, CircularProgress} from "@mui/material";
import Authors from "../../components/a/AuthorGrid/Authors.jsx"
import useAuthor from "../../../hooks/useAuthor.js";
import {useState} from "react";
import AddAuthorDialog from "../../components/a/AddAuthorDialog/AddAuthorDialog.jsx";
import "../../pages/Authors/AuthorsPage.css"
const AuthorsPage=()=>{
    const {authors, loading,onEdit,onAdd,onDelete}=useAuthor();
    const [addAuthorDialog, setAddAuthorDialog]=useState(false);
    return (
        <>

            <Box className="page-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddAuthorDialog(true)}>
                                Add Author
                            </Button>
                        </Box>
                        <Authors authors={authors} onEdit={onEdit} onDelete={onDelete}/>
                    </>
                }
            </Box>

            <AddAuthorDialog
                open={addAuthorDialog}
                onClose={()=>setAddAuthorDialog(false)}
                onAdd={onAdd}
            />
        </>
    );

}
export default AuthorsPage;