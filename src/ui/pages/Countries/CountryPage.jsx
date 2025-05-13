import {Box, Button, CircularProgress} from "@mui/material";
import useCountry from "../../../hooks/useCountry.js";
import Countries from "../../components/c/CountriesGrid/Countries.jsx";
import {useState} from "react";
import AddCountryDialog from "../../components/c/AddCountryDialog/AddCountryDialog.jsx";
const CountryPage=()=>{
    const {countries, loading,onAdd}=useCountry();
    const [addCountryDialog, setAddCountryDialog]=useState(false);

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
                            <Button variant="contained" color="primary" onClick={() => setAddCountryDialog(true)}>
                                Add Country
                            </Button>
                        </Box>
                        <Countries countries={countries}/>
                    </>
                }

            </Box>
            <AddCountryDialog
                open={addCountryDialog}
                onClose={()=>setAddCountryDialog(false)}
                onAdd={onAdd}
            />
        </>
    );

}
export default CountryPage;