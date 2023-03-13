import { IFormData } from './formType'

export const formData: Array<IFormData> = [{
    type: 'input',
    label: '名称',
    placeholder: '请输入名称',
    name: 'name'
},{
    type: 'select',
    label: '部门',
    name: 'department',
    placeholder: '请选择部门',
    options: [
        {
            value: '行政部',
            label: '行政部',
          },
          {
            value: '研发部',
            label: '研发部',
          },
          {
            value: '产品部',
            label: '产品部',
          },
          {
            value: '人事部',
            label: '人事部',
          },
          {
            value: '综合部',
            label: '综合部',
          }]
},{
    type: 'dateSelect',
    label: '修改日期',
    name: 'startData',
    placeholder: '请选择修改日期',
    mode: 'date'
},{
    type: 'rangePicker',
    label: '日期范围',
    name: 'dateRange',
    mode: 'datetimerange',
    otherOptions: {
        'start-placeholder': '请选择开始时间',
        'end-placeholder': '请选择结束时间'
    }
}]