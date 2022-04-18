import axios from 'axios';

const BASE_URL = process.env.BASE_URL
const api = axios.create({
    baseURL: BASE_URL
})

export {
    api,
    BASE_URL
}