import axios from 'axios';

export const api = axios.create({
  baseURL: "http://3.88.116.247:3000/api"
});
