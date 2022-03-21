import axios from 'axios';

export const api = axios.create({
  baseURL: "http://3.208.28.27:3000/api"
});
