import axios, { AxiosError } from "axios";

export const MAINURL = process.env.REACT_APP_API_URL;

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
