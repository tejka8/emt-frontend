import React from 'react';
import BooksPage from './ui/pages/Books/BooksPage.jsx';
import AuthorsPage from './ui/pages/Authors/AuthorsPage.jsx';
import CountryPage from './ui/pages/Countries/CountryPage.jsx';
import Layout from './ui/components/layout/Layout/Lyout.jsx';
import HomePage from './ui/pages/Home/HomePage.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="books" element={<BooksPage />} />
                    <Route path="authors" element={<AuthorsPage />} />
                    <Route path="countries" element={<CountryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
