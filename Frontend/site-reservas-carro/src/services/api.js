import axios from 'axios';

export const api = axios.create({
  baseURL: "http://18.208.217.244:3000/api"
});
