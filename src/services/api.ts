import axios from "axios";
export const api = axios.create({
    baseURL: 'http://179.67.88.144:4000'
});