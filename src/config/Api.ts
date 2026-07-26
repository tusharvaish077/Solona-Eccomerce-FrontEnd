import axios from "axios";

// export const API_URL ="http://localhost:5454";
// export const API_URL ="https://solona-ecommerce.onrender.com";
export const API_URL = process.env.REACT_APP_API_BASE_URL;
export const api = axios.create({
    baseURL:API_URL,
    headers:{
        "Content-Type":"application/json",
    }
})

api.interceptors.request.use(
    (config) => {

        const jwt = localStorage.getItem("jwt");

        if (jwt) {
            config.headers.Authorization = `Bearer ${jwt}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);