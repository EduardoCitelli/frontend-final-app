import { Employee } from "../../../models/Employee";

export const ALL_EMPLOYEES_SUCCESS = 'ALL_EMPLOYEES_SUCCESS';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const CREATE_EMPLOYEE_SUCCESS = 'CREATE_EMPLOYEE_SUCCESS';
export const UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';

interface EmployeesAsync {
    Employees: Employee[];
    error: string;
}

interface EmployeeAsync {
    Employee: Employee;
    error: string;
}

interface GetEmployeesSuccess extends EmployeesAsync {
    type: typeof ALL_EMPLOYEES_SUCCESS;
}

interface GetEmployeeSuccess extends EmployeeAsync {
    type: typeof GET_EMPLOYEE_SUCCESS;
}

interface CreateEmployeeSuccess extends EmployeeAsync {
    type: typeof CREATE_EMPLOYEE_SUCCESS;    
}

interface UpdateEmployeeSuccess extends EmployeeAsync {
    type: typeof UPDATE_EMPLOYEE_SUCCESS;
}

interface DeleteEmployeeSuccess extends EmployeeAsync {
    type: typeof DELETE_EMPLOYEE_SUCCESS;
}

export type EmployeeActionType = 
    | GetEmployeesSuccess
    | GetEmployeeSuccess
    | CreateEmployeeSuccess
    | UpdateEmployeeSuccess
    | DeleteEmployeeSuccess;