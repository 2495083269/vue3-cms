export interface IAccount {
    username: string,
    password: string
}

// 定义服务器返回的数据类型
export interface IDataType<T> {
    token: { token: any }
    code: number,
    result: T
}

export interface ILoginResult{
    token: string,
}

export interface IUserInfo {
    username: string,
    nickname: string,
    emial: string,
    pic_img: string
}