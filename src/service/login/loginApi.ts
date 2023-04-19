import hyRequest from '../index'
import { IAccount, IDataType, ILoginResult, IUserInfo } from './type'

// 使用枚举的方式管理url
enum LoginAPI {
    AccountLogin = '/api/login',
    getUserinfo = '/my/userinfo'
}

export const accountLoginRequest = (account: IAccount) => {
    // 服务器返回的数据加上类型的逻辑
    return hyRequest.request<IDataType<ILoginResult>>({
        url: LoginAPI.AccountLogin,
        method: 'post',
        data: account,
        showLoading: false
    })
}

export const getUserinfo = () => {
    return hyRequest.request<IDataType<IUserInfo>>({
        url: LoginAPI.getUserinfo,
        method: 'get',
        showLoading: true
    })
}