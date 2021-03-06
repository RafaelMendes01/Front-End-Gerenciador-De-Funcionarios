import axios, { AxiosInstance } from "axios";

export const http: AxiosInstance = axios.create({
    baseURL: "http://localhost:3000/",
    headers:{
        'accept': 'application/json',
        'content': 'application/json'
    }
});
