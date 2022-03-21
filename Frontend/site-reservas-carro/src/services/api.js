import axios from 'axios';

export const api = axios.create({
  baseURL: "http://44.203.122.38:8080/"
});
