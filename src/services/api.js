import axios from 'axios';

const api = axios.create({
    BaseURL: 'https://www.omdbapi.com/?apikey=7c7ae5a'  
})

export default api;

