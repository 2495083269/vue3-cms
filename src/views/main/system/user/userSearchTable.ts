import { ITablePropData } from '@/utils/tableType'

export const userPropList: ITablePropData[] = [
    {
        prop: 'userName',
        label: '姓名',
        minWidth: '100'
    }, {
        prop: 'realName',
        label: '真实姓名',
        minWidth: '100'
    }, {
        prop: 'phoneNumber',
        label: '电话号码',
        minWidth: '100'
    }, {
        prop: 'state',
        label: '状态',
        minWidth: '100',
        soltName: 'status'
    }, {
        prop: 'createTime',
        label: '创建时间',
        minWidth: '200',
        soltName: 'createTime'
    }, {
        prop: 'updateTime',
        label: '更新时间',
        minWidth: '200'
    }, {
        label: '操作',
        soltName: 'action',
        minWidth: '200'
    }]