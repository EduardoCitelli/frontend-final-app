import * as employeeApi from "../../api/employees-api";
import { Dispatch } from "react";
import { AppActions } from "./models/actions";
import { apiCallError, beginApiCall, endApiCall } from "./api-status-actions";
import { createEmployeeSuccess, deleteEmployeeSuccess, getEmployeesSuccess, updateEmployeeSuccess } from "./employee-status-actions";
import { Employee } from "../../models/Employee";

export function getEmployees() {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        dispatch(beginApiCall());

        return employeeApi.getEmployees()
            .then(response => {
                dispatch(getEmployeesSuccess(response.data));
                dispatch(endApiCall());
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            });
    }
}

export function saveEmployee(employee: Employee): (dispatch: Dispatch<AppActions>) => Promise<void> {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        const id = employee.id;

        dispatch(beginApiCall());

        return employeeApi.saveEmployee(employee)
            .then(response => {
                id ? dispatch(updateEmployeeSuccess(response.data)) : dispatch(createEmployeeSuccess(response.data));
                dispatch(endApiCall());
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            })
    }
}

export function deleteEmployee(employeeId: string) {
    return function (dispatch: Dispatch<AppActions>): Promise<void> {
        dispatch(beginApiCall());

        return employeeApi.deleteEmployee(employeeId)
            .then(response => {
                dispatch(deleteEmployeeSuccess(response.data));
                dispatch(endApiCall());
            })
            .catch((error: Error) => {
                dispatch(apiCallError(error.message));
                throw error;
            })
    }
}