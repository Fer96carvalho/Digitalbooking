import axios from 'axios';

export const api = axios.create({
  baseURL: "http://54.91.21.0:3000/api"
});
