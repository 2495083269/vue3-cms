import { RouteRecordRaw } from "vue-router";
import { IMenudata } from "./routerType";

// 配置路由映射关系的函数

export function mapMenusToRouter(userMenus: IMenudata[]) {
    const routes: RouteRecordRaw[] = []

    // 1、先加载默认所有的routers
    const allRouters: RouteRecordRaw[] = []
    // webpack提供的函数进行解析页面
    const routeFiles = require.context('../router/main',true,/\.ts/)
    // 遍历获取到的所有文件
    routeFiles.keys().forEach(key => {
        const route = require('../router/main' + key.split('.')[1])
        allRouters.push(route.default)
    })

    console.log(allRouters)

    // 2、根据菜单获取需要添加的routers
    // 定义一个递归函数来处理路由数据
    const _recurseGrtRoute = (menus: IMenudata[]) => {
        for (const menu of menus) {
            if (menu.path) {
                const route = allRouters.find(route => route.path === menu.path)
                if (route) routes.push(route)
            }else {
                const menuChildren = menu.children ?? []
                _recurseGrtRoute(menuChildren)
            }
        }
    }

    _recurseGrtRoute(userMenus)


    return routes

}