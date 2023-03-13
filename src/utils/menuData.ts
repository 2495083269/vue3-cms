// 路由所需数据
import { IMenudata } from "./routerType"

export const menuData: Array<IMenudata> = [{
    icon: 'i-ep-Monitor',
    name: '系统总览',
    id: '1',
    path: '/main/systemOverview/overview',
}, {
    icon: 'i-ep-Setting',
    name: '系统管理',
    id: '2',
    children: [{
        name: '用户管理',
        path: '/main/system/user',
        id: '2.1'
    }, {
        name: '部门管理',
        path: '/main/system/department',
        id: '2.2'
    }]
},{
    icon: 'i-ep-Iphone',
    name: '角色管理',
    path: '/main/role/role',
    id: '3'
}, {
    icon: 'i-ep-Iphone',
    name: '商品中心',
    id: '4',
    children: [{
        name: '商品类别',
        path: '/main/goods/category',
        id: '4.1'
    }, {
        name: '商品信息',
        path: '/main/goods/information',
        id: '4.2'
    }]
},{
    icon: 'i-ep-Iphone',
    name: '随便聊聊',
    id: '5',
    children: [{
        name: '你的故事',
        path: '/main/stroy/your',
        id: '5.1'
    }, {
        name: '故事列表',
        path: '/main/stroy/list',
        id: '5.2'
    }]
}]