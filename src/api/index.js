import axios from "axios";

const BASE_URL = "https://auth-server.pavelmart.repl.co/api";

const $api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});

export default $api;
