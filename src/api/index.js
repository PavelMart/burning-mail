import axios from "axios";

const BASE_URL = "https://test-server-by-pm.ru/api";

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export default $api;
