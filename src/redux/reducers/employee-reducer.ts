import { Employee } from "../../models/Employee";
import { 
    EmployeeActionType, 
    ALL_EMPLOYEES_SUCCESS, 
    GET_EMPLOYEE_SUCCESS, 
    CREATE_EMPLOYEE_SUCCESS, 
    UPDATE_EMPLOYEE_SUCCESS, 
    DELETE_EMPLOYEE_SUCCESS 
} from "../types/employees/employee-types";


interface EmployeesState {
    employees: Employee[];
    error: string;
}

interface EmployeeState extends EmployeesState {
    employee: Employee;
}

const defaultState: EmployeesState = {
    employees: [],
    error: '',
}

export default function employeeReducer(state = defaultState, action: EmployeeActionType): EmployeesState | EmployeeState {
    switch (action.type) {
        case ALL_EMPLOYEES_SUCCESS:
            return {
                ...state,
                employees: action.employees
            }

        case GET_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employee: action.employee
            }

        case CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: [...state.employees, { ...action.employee }],
            };

        case UPDATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.map(employee => employee.id === action.employee.id ? action.employee : employee),
            };

        case DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.employee.id),
            }

        default:
            return state
    }
}