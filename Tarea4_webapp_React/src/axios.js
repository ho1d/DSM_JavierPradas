import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://DSMJavierPradas.com/'
});

export default instance;