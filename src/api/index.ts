import {API_BASE_URL, API_TIMEOUT} from '@/constants/common';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    // withCredentials: true,
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
            if (error.code === 'ERR_CANCELED') {
                // aborted in useEffect cleanup
                return Promise.resolve({status: 499});
            }
            // [To-do] 에러케이스 정리
            switch (error.response.status) {
                case 404 || 500:
                    console.warn(`[Server ${error.response.status} Error] ${error}`);
                    window.location.href = `/error/${error.response.status}`;
                    break;
                default:
                    console.warn('[responseError]', error);
            }
        }
        return Promise.reject(error);
    },
);

export default axiosInstance;

/** 요청 취소 */
const {CancelToken} = axios;
export const source = CancelToken.source();

export const cancelApiRequest = (msg: string) => {
    source.cancel(`[cancelApiRequest] ${msg}`);
};
