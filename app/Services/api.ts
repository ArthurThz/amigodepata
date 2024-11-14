import axios from "axios";


export const API_ROUTE = axios.create({
    baseURL:"http://localhost:3333",
    headers:{
        "Content-Type":"application/json"
    }
})