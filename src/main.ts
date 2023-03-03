import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// 引入样式
import 'normalize.css'
import hyRequest from './service'


// 测试发送请求,调用的时候需要指定类型
// hyRequest.request({
//     url: '/sys/login',
//     method: 'post',
//     data: {
//         username: 'admin',
//         password: '!QAZ2wsx',
//     },
//     showLoading: false
// }).then(res => {
//     console.log("请求成功之后获取返回的结果",res)
// })

createApp(App).use(store).use(router).mount('#app')
