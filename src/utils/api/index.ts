import axios, { AxiosError } from "axios";

export const MAINURL =
  "https://aff3-2001-e60-d207-5028-6949-25c4-38b2-6f33.ngrok.io";

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
