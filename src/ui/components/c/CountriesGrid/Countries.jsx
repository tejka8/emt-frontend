import React from 'react';
import Country from '../CountryCard/Country.jsx';
import {Grid} from "@mui/material";

const Countries = ({countries}) => {
    return (
        <Grid container spacing={{ xs: 2, md: 3 }}>
            {countries.map((country) => (
                <Grid key={country.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                    <Country country={country}/>
                </Grid>
            ))}
        </Grid>
    );
};

export default Countries;