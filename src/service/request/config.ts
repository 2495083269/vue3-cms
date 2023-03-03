// 配置环境变量

let BASE_URL = ''
const TIME_OUT = 10000


if (process.env.NODE_ENV === 'development') {
    BASE_URL = 'http://183.230.210.84:10001'
}

export {
    BASE_URL,
    TIME_OUT
}