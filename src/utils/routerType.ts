export interface IMenudata {
    icon?: string,
    name: string,
    id: string,
    path?: string,
    children?: Array<IMenudata>
}