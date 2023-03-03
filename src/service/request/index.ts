import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { ElLoading } from 'element-plus'


// 定义一个接口设置拦截器,封装请求拦截和相应拦截的类型
interface HYRequestInterceptors {
    requestInterceptor?: (config: any) => any
    requestInterceptorCatch?: (error: any) => any
    responseInterceptor?: (res: AxiosResponse) => AxiosResponse
    responseInterceptorCatch?: (error: any) => any
}
// 拓展接口
interface HYRequestConfig extends AxiosRequestConfig {
    interceptors?: HYRequestInterceptors
    showLoading?: boolean
}

const DEFAULT_LOADING = true

// 自己封装一个request
class HYRequest {
    instance: AxiosInstance
    interceptors?: HYRequestInterceptors
    showLoading: boolean
    loadingInstance?: any

    // 实例拦截器
    constructor(config: HYRequestConfig) {
        this.instance = axios.create(config)
        this.interceptors = config.interceptors
        this.showLoading = config.showLoading ?? DEFAULT_LOADING

        // 封装请求拦截和响应拦截
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch,
        )

        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        )

        // 所有实例都有的拦截器
        this.instance.interceptors.request.use((config) => {
            // 给所有的请求添加loading状态
            if (this.showLoading) {
                this.loadingInstance = ElLoading.service({
                    lock: true,
                    text: 'loading',
                    background: 'rgba(0,0,0,0.2)'
                })
            }

            
            return config
        }, (err) => {
            
            return err
        })
        this.instance.interceptors.response.use((res) => {
            
            this.loadingInstance?.close()
            return res.data
        }, (err) => {
            
            this.loadingInstance.close()
            return err
        })
    }

    // 每个请求的拦截器
    request<T>(config: HYRequestConfig): Promise<T> {
        // 以promise的方式封装，让外部能接收到返回值
        return new Promise((resolve, reject) => {
            // 单个请求进行处理
            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config)
            }
            if (config.showLoading === false) {
                this.showLoading = config.showLoading
            }
            this.instance.request<any,T>(config).then(res => {
                if (config.interceptors?.responseInterceptor) {
                    // res = config.interceptors.responseInterceptor(res)
                }
                // 请求完成之后再设置回来，不回影响下次请求
                this.showLoading = DEFAULT_LOADING
                resolve(res)
            }).catch(err => {
                this.showLoading = DEFAULT_LOADING
                reject(err)
            })
        })

    }
}


export default HYRequest