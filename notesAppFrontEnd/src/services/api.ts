import axios, { AxiosInstance } from 'axios';
//Url basica de la api
const api: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
});

export default api;
