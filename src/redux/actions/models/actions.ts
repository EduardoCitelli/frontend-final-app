import { EmployeeActionType } from '../../types/employees/employee-types';
import { ApiActionType } from '../../types/api/api-types';

export type AppActions = EmployeeActionType | ApiActionType;