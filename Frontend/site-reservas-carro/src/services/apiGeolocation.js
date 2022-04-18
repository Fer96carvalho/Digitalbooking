import axios from 'axios';

const apiGeolocation = axios.create({
    baseURL: "http://maps.googleapis.com/maps/api/geocode"
});

export default apiGeolocation;