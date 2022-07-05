import axios from "axios";

const BASE_URL = "https://test-server-by-pm.ru/api";

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

$api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
});

export default $api;
