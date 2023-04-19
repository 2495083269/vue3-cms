import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import LocalCache from "@/utils/cache"

const hyRequest = new HYRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    // 修改请求头
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
    },
    interceptors: {
        requestInterceptor: (config) => {
            // 请求之前加入token
            const token = LocalCache.getCache('token')
            if (token) {
                config.headers.Authorization = token
            }
            return config
        },
        requestInterceptorCatch: (err) => {
            return err
        },
        responseInterceptor: (res) => {
            return res
        },
        responseInterceptorCatch: (err) => {
            return err
        }
    }
})

export default hyRequest