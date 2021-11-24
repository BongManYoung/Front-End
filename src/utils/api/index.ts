import axios, { AxiosError } from "axios";

export const MAINURL = "http://51cb-14-50-190-128.ngrok.io";

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
