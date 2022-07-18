import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { RSAEncrypt } from '/@/common/utils/sign';
import { getTimestamp } from '/@/common/utils/datetime';
import { APP_CODE } from '/@/common/constants';

const apiRequestRegexp = /^\/api/;

const requestHander = (config: AxiosRequestConfig) => {
  if (apiRequestRegexp.exec(config.url!)) {
    const currentTimestamp = getTimestamp();
    const signatureMessage = {
      params: config.params,
      timestamp: currentTimestamp,
      appCode: APP_CODE,
    };

    if (!config.params) {
      delete signatureMessage.params;
    }

    config.headers!['signature'] = RSAEncrypt(signatureMessage);
    config.headers!['timestamp'] = currentTimestamp;
    config.headers!['app-code'] = APP_CODE;
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
