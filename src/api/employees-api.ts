import { Employee } from "../models/Employee";
import { handleResponse, handleError } from "./api-utils";

const baseUrl = process.env.REACT_APP_API_URL + "employees/";

export function getEmployees(): Promise<any> {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function getEmployee(userId: string): Promise<any> {
    return fetch(baseUrl + userId)
        .then(handleResponse)
        .catch(handleError);
}

export function saveEmployee(employee: Employee): Promise<any> {
    const id = employee.id;
    delete employee.id;

    return fetch(baseUrl + (id || ""), {
        method: id ? "PUT" : "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(employee)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteEmployee(userId: string): Promise<any> {
    return fetch(baseUrl + userId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}