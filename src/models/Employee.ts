export interface Employee {
    id?: string,
    name: string,
    surname: string,
    phone: string,
    email: string,
    area: EmployeeArea,
}

export enum EmployeeArea {
    RRHH = 1,
    ACCOUNTING,
    MARKETING
}