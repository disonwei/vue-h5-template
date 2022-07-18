import axios from 'axios';
import { NETWORK_TIMEOUT_ERROR_MESSAGE } from '/@/common/constants';
import httpHandler from '/@/common/http/http-handler';

axios.defaults.timeout = 10000;
axios.defaults.timeoutErrorMessage = NETWORK_TIMEOUT_ERROR_MESSAGE;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(httpHandler.requestHander, httpHandler.requestErrorHandler);
axios.interceptors.response.use(httpHandler.responseHandler, httpHandler.responseErrorHandler);
export default axios;
