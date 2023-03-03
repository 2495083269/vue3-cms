import { createStore } from 'vuex'
// 控制state的用法
import { IRootState } from './type'

import login from './login/login'

export default createStore<IRootState>({
  state: {
    name: 'rose',
    age: 18
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login
  }
})
