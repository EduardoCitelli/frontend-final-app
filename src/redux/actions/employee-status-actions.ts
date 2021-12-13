import { 
    ALL_EMPLOYEES_SUCCESS, 
    CREATE_EMPLOYEE_SUCCESS, 
    DELETE_EMPLOYEE_SUCCESS, 
    GET_EMPLOYEE_SUCCESS, 
    UPDATE_EMPLOYEE_SUCCESS 
} from "../types/employees/employee-types";

import { Employee } from "../../models/Employee";
import { AppActions } from "./models/actions";

export function getEmployeesSuccess(employees: Employee[]): AppActions {
    return {
        type: ALL_EMPLOYEES_SUCCESS,
        employees: employees,
        error: '',
    }
}

export function getEmployeeSuccess(employee: Employee): AppActions {
    return {
        type: GET_EMPLOYEE_SUCCESS,
        employee: employee,
        error: '',
    }
}

export function createEmployeeSuccess(employee: Employee): AppActions {
    return {
        type: CREATE_EMPLOYEE_SUCCESS,
        employee: employee,
        error: '',
    }
}

export function updateEmployeeSuccess(employee: Employee): AppActions {
    return {
        type: UPDATE_EMPLOYEE_SUCCESS,
        employee: employee,
        error: '',
    }
}

export function deleteEmployeeSuccess(employee: Employee): AppActions {
    return {
        type: DELETE_EMPLOYEE_SUCCESS,
        employee: employee,
        error: '',
    }
}