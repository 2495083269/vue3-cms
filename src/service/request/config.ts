// 配置环境变量

let BASE_URL = ''
const TIME_OUT = 10000


if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://127.0.0.1:3007'
}

export {
    BASE_URL,
    TIME_OUT
}