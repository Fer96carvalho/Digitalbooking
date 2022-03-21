import axios from 'axios';

export const api = axios.create({
  baseURL: "http://3.87.15.125:3000/api"
});
