import {useCallback, useEffect, useState} from "react";
import authorRepository from "../repositories/authorRepository.js";

const initialState = {
    "authors": [],
    "loading": true,
};

const useAuthor = () => {
    const [state, setState] = useState(initialState);

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

    return {
        ...state,
        onAdd:onAdd,
        onEdit:onEdit,
        onDelete:onDelete
    };
};

export default useAuthor;
