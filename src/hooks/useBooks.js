import {useCallback, useEffect, useState} from "react";
import booksRepository from "../repositories/booksRepository.js";
import {data} from "react-router";

const initialState  ={
    books:[],
    loading:true
}
const useBooks = (callback, deps) => {
    const[state, setState]=useState(initialState);

    const fetchBooks=useCallback(()=>{
        setState({
            books:[],
            loading:true
        })
        booksRepository
            .findAll()
            .then((response)=> setState({
                books:response.data,
                loading:false
            }))
            .catch((err)=>console.log(err))
    },[])


    const onAdd=useCallback((data)=>{
        booksRepository
            .create(data)
            .then(()=>fetchBooks())
            .catch((err)=> console.log(err))
    },[fetchBooks])

    //po ID od API ja pronaogja book, i ja brsie
    const onDelete={}

    //EDIT
    const onEdit=useCallback((id,data)=>{
        booksRepository
            .update(id,data)
            .then(()=>fetchBooks())
            .catch((err)=> console.log(err))
    },[fetchBooks])

    useEffect(()=>{
        fetchBooks()
    },[fetchBooks]);
    return {...state,onAdd:onAdd, onDelete:onDelete, onEdit:onEdit};
};

export default useBooks;