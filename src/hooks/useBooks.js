import {useCallback, useEffect, useState} from "react";
import booksRepository from "../repositories/booksRepository.js";
import {data} from "react-router";

const initialState = {
    "books": [],
    "loading": true,
};

const useBooks = () => {
    const[state, setState]=useState(initialState);
    //fetching all books
    //dodeka da gi najde knigite loafing vrti, koga ke se prikazat loading sprestanuva

    const fetchBooks = useCallback(()=>{
        booksRepository.findAll()
            .then((response)=>{
                setState({
                    "books":response.data,
                    "loading":false,
                })
            })
            .catch((error)=>console.log(error))
    },[]);

    const onAdd = useCallback((data)=>{
        booksRepository
            .create(data)
            .then(() => {
                console.log("Successfully added a new product.");
                fetchBooks();
            })
            .catch((error) => console.log(error));
    }, [fetchBooks]);


    //po ID od API ja pronaogja book, i ja brsie
    const onDelete = useCallback((id)=>{
        booksRepository
            .delete(id)
            .then(()=>{
                console.log(`Successfully deleted the book with ID ${id}`)
                fetchBooks(); //pravi refresh na stranata
            })
            .catch((error)=>console.log(error));
    },[fetchBooks]);


    //EDIT
    const onEdit = useCallback((id,data)=>{
        booksRepository
            .update(id,data)
            .then(()=>{
                console.log(`Successfully edited the book with ID ${id}`)
                fetchBooks(); //pravi refresh na stranata
            })
            .catch((error)=>console.log(error));
    },[fetchBooks]);


    useEffect(()=>{
        fetchBooks();
    },[fetchBooks]);
    return {...state,onAdd:onAdd, onDelete:onDelete, onEdit:onEdit};
};

export default useBooks;