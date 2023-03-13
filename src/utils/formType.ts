type IFormType = 'input' | 'select' | 'dateSelect' | 'rangePicker'
type IDataType = 'year'|'month'|'date'|'dates'|'datetime'| 'week'|'datetimerange'|'daterange'| 'monthrange'

export interface IFormData {
    type: IFormType,
    label: string,
    name: string,
    placeholder?: string,
    options?: Array<any>,
    mode?: IDataType,
    format?: string,
    otherOptions?: {
        'start-placeholder': string,
        'end-placeholder': string
    }
}