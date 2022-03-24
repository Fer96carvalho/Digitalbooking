import axios from 'axios';

export const api = axios.create({
  baseURL: "http://52.91.229.58:8080/"
});