import axiosInstance from "../axios/axios.js";

const booksRepository={
    findAll:async()=>{
        return await axiosInstance.get("/books");
    },
    // returns book by ID
    findById: async(id)=>{
        return await axiosInstance.get(`/books/${id}`);
    },
    //creating new book
    create: async (data)=>{
        return await axiosInstance.post("/books/add",data);
    },
    //updating book
    update:async (id, data)=>{
        return await axiosInstance.put(`/books/edit/${id}`,data);
    },
    //deleting book
    delete:async(id)=>{
        return await axiosInstance.delete(`/books/delete/${id}`);
    }
}

export default booksRepository;