import axios from 'axios';

// Create a simple axios instance without complex interceptors
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Using JSONPlaceholder as an example API
  timeout: 10000,
});

export default api;