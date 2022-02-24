import axios from 'axios';

const api = axios.create({
  baseURL: 'www.enderecoapi.com'
});

export default api;