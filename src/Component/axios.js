import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001/fir-d7f8e/us-central1/api'
});

export default instance;