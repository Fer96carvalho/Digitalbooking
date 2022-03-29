import axios from 'axios';

const api = axios.create({
  // baseURL: "http://3.95.136.204:8080/"
  baseURL: "http://localhost:8080/"
});

export default api;
