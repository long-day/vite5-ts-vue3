import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
// import { useLoginStore } from '@/store';
import { getToken } from '@/utils/auth';
// import modalErrorWrapper from '@/utils/modal-error-wrapper';
// import messageErrorWrapper from '@/utils/message-error-wrapper';

// default config
if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
  axios.defaults.timeout = 60000; // 1 分钟
}

export interface HttpResponse<T = any> {
  code: number; // 状态码
  msg: string; // 状态信息
  data: T; // 返回数据
  rows: T;
  total: number;
}

// request interceptors
axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// response interceptors
axios.interceptors.response.use(
  (response) => {
    // 过滤掉失败情况(返回status非2XX的情况)
    if (isStopHere(response.status)) {
      return Promise.reject(new Error('请求发生错误...'));
    }

    return response;
  },
  (error) => {},
);

/**
 * 判断状态码是否为2XX,返回是否通过检验
 * @param responseStatus 响应状态码
 * @returns 通过检验: true, 否则: false
 */
function isStopHere(responseStatus: number) {
  responseStatus /= 100;
  switch (responseStatus) {
    case 2: {
      return false;
    }
    case 4: {
      return true;
    }
    case 5: {
      return true;
    }
    default: {
      return true;
    }
  }
}
