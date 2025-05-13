import axiosInstance from "../axios/axios.js";

const countryRepository={
    findAll:async()=>{
        return await axiosInstance.get("/countries");
    },
    create:async (data)=>{
        return await axiosInstance.post("/countries/add",data)
    }
}

export default countryRepository;