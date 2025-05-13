import {useCallback, useEffect, useState} from "react";
import countryRepository from "../repositories/countryRepository.js";
import authorRepository from "../repositories/authorRepository.js";

const initialState = {
    "countries": [],
    "loading": true,
};

const useCountry = () => {
    const [state, setState] = useState(initialState);

    const fetchCountries = useCallback(() => {
        countryRepository
            .findAll()
            .then((response) => {
                setState({
                    "countries": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        countryRepository
            .create(data)
            .then(() => {
                console.log("Added a new author");
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries]);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);


    return {...state, onAdd:onAdd};
};

export default useCountry;