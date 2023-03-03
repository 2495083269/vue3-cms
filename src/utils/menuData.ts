// 路由所需数据
import { IMenudata } from "./routerType"

export const menuData: Array<IMenudata> = [{
    icon: 'i-ep-Monitor',
    name: '系统总览',
    path: '/main/systemOverview/overview',
}, {
    icon: 'i-ep-Setting',
    name: '系统管理',
    children: [{
        name: '用户管理',
        path: '/main/system/user',
    }, {
        name: '部门管理',
        path: '/main/system/department',
    }]
},{
    icon: 'i-ep-Iphone',
    name: '角色管理',
    path: '/main/role/role',
}, {
    icon: 'i-ep-Iphone',
    name: '商品中心',
    children: [{
        name: '商品类别',
        path: '/main/goods/category',
    }, {
        name: '商品信息',
        path: '/main/goods/information',
    }]
},{
    icon: 'i-ep-Iphone',
    name: '随便聊聊',
    children: [{
        name: '你的故事',
        path: '/main/stroy/your',
    }, {
        name: '故事列表',
        path: '/main/stroy/list',
    }]
}]