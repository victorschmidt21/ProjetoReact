import axios from "axios";

export const token = "d4e0b108e59de39dcb716c47e251eaca"

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
    
})