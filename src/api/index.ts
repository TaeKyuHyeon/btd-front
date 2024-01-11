import {API_BASE_URL, API_TIMEOUT} from '@/constants/common';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    timeout: API_TIMEOUT,
});

axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => {
        console.warn('[RequestError]', error);
        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    (response) => response, // response의 data만 return
    (error) => {
        if (error.response) {
            const {errorCode} = error.response.data;
            // [To-do] 에러케이스 정리
            switch (error.response.status) {
                default:
                    console.warn('[responseError]', errorCode, error);
            }
        }
        return Promise.reject(error);
    },
);
export default axiosInstance;
