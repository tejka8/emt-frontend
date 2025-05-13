import React from 'react';
import {Box, Container} from "@mui/material";
import {Outlet} from "react-router"
import Header from "../Header/Header.jsx";
import "./Layout.css";


const Lyout = () => {
    return (
        <Box className="layout-box">
            <Header/>
            <Container className="outlet-container" sx={{my: 2}} maxWidth="lg">
                <Outlet/>
            </Container>
        </Box>
    );
};

export default Lyout;