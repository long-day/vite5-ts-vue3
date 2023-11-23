import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { useLoginStore } from '@/store';
import { getToken } from '@/utils/auth';
import modalErrorWrapper from '@/utils/modal-error-wrapper';
import messageErrorWrapper from '@/utils/message-error-wrapper';

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
  status: number;
  statusText: string;
  headers: any;
  config: any;
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
  (response: AxiosResponse<HttpResponse>) => {
    // 二进制数据则直接返回
    if (
      response.request.responseType === 'blob' ||
      response.request.responseType === 'arraybuffer'
    ) {
      return response;
    }
    const res = response.data;
    if (res.code == 200) {
      return response;
    }
    if ([401].includes(res.code) && response.config.url !== '/auth/user/info') {
      modalErrorWrapper({
        title: '确认退出',
        content: res.msg,
        maskClosable: false,
        escToClose: false,
        okText: '重新登录',
        async onOk() {
          const loginStore = useLoginStore();
          await loginStore.logout();
          window.location.reload();
        },
      });
    } else {
      messageErrorWrapper({
        content: res.msg || '网络错误',
        duration: 5 * 1000,
      });
    }
    return Promise.reject(new Error(res.msg || '网络错误'));
  },
  (error) => {
    messageErrorWrapper({
      content: error.msg || '网络错误',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  },
);
