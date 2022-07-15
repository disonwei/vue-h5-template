import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const apiRequestRegexp = /^\/api/;

const requestHander = (config: AxiosRequestConfig) => {
  if (config.url!.search(apiRequestRegexp)) {
    config.url = `${process.env.VITE_URL_PREFIX} ${config.url}`;
  }

  return config;
};

const requestErrorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

const responseHandler = (result: AxiosResponse) => {
  return result;
};

const responseErrorHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

export default { requestHander, requestErrorHandler, responseHandler, responseErrorHandler };
