import axios, { AxiosError } from "axios";

export const MAINURL =
  "http://d614-2001-4430-c01d-203d-e928-e658-1bbd-cb01.ngrok.io";

const instance = axios.create({
  baseURL: MAINURL,
  timeout: 10000,
});

instance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (config) {
    return config;
  },
  function (error: AxiosError) {
    // const status = error.response?.status;

    return Promise.reject(error);
  }
);

export default instance;
