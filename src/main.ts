import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { globalRegister } from '@/global'
import { formatUtcString } from '@/utils/date-format'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

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

const app = createApp(App)

// 未知原因，没有挂载成功
app.use(globalRegister)

app.config.globalProperties.$filters = {
    formatTime(value: string){
        return formatUtcString(value)
    }
}

app.use(ElementPlus, {
    locale: zhCn,
  })

// app.config.globalProperties 注册之后可以在全局任何地方使用
app.use(store).use(router).mount('#app')
