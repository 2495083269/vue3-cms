import { Module } from "vuex";
import { ILoginState } from "./type";
import { IRootState } from "../type";
import { accountLoginRequest } from '@/service/login/loginApi'
import LocalCache from "@/utils/cache"
import router from '@/router'

// 模块的类型、跟模块的类型
const loginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state: {
        token: '',
        userInfo: {}
    },
    mutations: {
        changeToken(state,token: string) {
            console.log("提交数据",token )
            state.token = token
        }
    },
    actions: {
        async accountLoginAction({ commit }, payload: any) {
            // 在这了进行登录操作
            console.log("accountLoginAction登陆中~", payload)
            const loginResult = await accountLoginRequest(payload)
            const token = loginResult.token
            // 获取类型之外的数据将会报错
            // console.log("获取请求之后的返回值",loginResult.result.userInfo)
            // 必须使用commit的方式修改state中的数据状态
            commit('changeToken', token)
            LocalCache.setCache('token',token)
            router.push('/main')
        }
    }
}

export default loginModule