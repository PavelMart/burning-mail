import axios from "axios";

const BASE_URL = "http://31.172.64.183:5000/api";

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export default $api;
