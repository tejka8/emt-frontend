import axiosInstance from "../axios/axios.js";

const authorRepository={
    findAll:async()=>{
        return await axiosInstance.get("/authors");
    },
    create: async (data)=>{
        return await axiosInstance.post("/authors/add",data);
    },
    //updating book
    update:async (id, data)=>{
        return await axiosInstance.put(`/authors/edit/${id}`,data);
    },
    //deleting book
    delete:async(id)=>{
        return await axiosInstance.delete(`/authors/delete/${id}`);
    },

    fetchAuthorsPerCountry:async ()=>{
        return await axiosInstance.get("/authors/by-country");
    }

}

export default authorRepository;