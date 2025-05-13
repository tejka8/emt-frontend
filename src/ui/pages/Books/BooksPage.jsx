import {Box, Button, CircularProgress} from "@mui/material";
import Books from "../../components/b/BooksGrid/Books.jsx"
import useBooks from "../../../hooks/useBooks.js"
import {useState} from "react";
import AddBookDialog from "../../components/b/AddBooksDialog/AddBooksDialog.jsx";
const BooksPage=()=>{
    const{books,loading,onDelete,onEdit,onAdd}=useBooks();
    const [addBookDialog, setAddBookDialog] = useState(false);

    return (
        <>

            <Box className="page-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}

                {
                    !loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddBookDialog(true)}>
                                Add Product
                            </Button>
                        </Box>
                        <Books books={books} onEdit={onEdit} onDelete={onDelete} />
                    </>
                }
            </Box>
            <AddBookDialog
                open={addBookDialog}
                onClose={()=>setAddBookDialog(false)}
                onAdd={onAdd}
            />

        </>
    );

}
export default BooksPage;