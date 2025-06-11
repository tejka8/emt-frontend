import {useCallback, useEffect, useState} from "react";
import authorRepository from "../repositories/authorRepository.js";

const initialState = {
    "authors": [],
    "loading": true,
};

const countryMap = {
    1: "USA",
    2: "UK",
    3: "Germany",
    4: "USA",
    5: "UK",
    6: "Germany",
    7: "North Macedonia",
    8: "Norway",
    9: "Sweden",
    10: "Poland",
    11: "Austria",
    12: "Greece",
    13:"India"
};
const useAuthor = () => {
    const [state, setState] = useState(initialState);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    const fetchAuthors = useCallback(() => {
        authorRepository
            .findAll()
            .then((response) => {
                setState({
                    "authors": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        authorRepository
            .create(data)
            .then(() => {
                console.log("Added a new author");
                fetchAuthors();
            })
            .catch((error) => console.log(error));
    }, [fetchAuthors]);

    const onEdit = useCallback((id, data) => {
        authorRepository
            .update(id, data)
            .then(() => {
                console.log(`Edited author ${id}`);
                fetchAuthors();
            })
            .catch((error) => console.log(error));
    }, [fetchAuthors]);

    const onDelete = useCallback((id) => {
        authorRepository.delete(id)
            .then(() => {
                console.log(`Deleted author ${id}`);
                fetchAuthors();
            })
            .catch((error) => console.log(error));
    }, [fetchAuthors]);


    useEffect(() => {
        fetchAuthors();
    }, [fetchAuthors]);

    useEffect(() => {
        authorRepository
            .fetchAuthorsPerCountry()
            .then((response) => {
                const transformed = response.data
                    .map((item) => ({
                        country: countryMap[item.countryId] || `ID ${item.countryId}`,
                        authors: item.numAuthors,
                    }));

                setData(transformed);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching authors per country:", error);
                setLoading(false);
            });
    }, []);

    return {
        ...state,
        onAdd:onAdd,
        onEdit:onEdit,
        onDelete:onDelete,
        data,
        loading
    };
};

export default useAuthor;
