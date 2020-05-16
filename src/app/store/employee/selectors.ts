import { IEmployee } from './state';
import { IAppState } from '../app-state.interface';

export const employeeList = (state: IAppState): IEmployee[] => state.employeeState.employees;
export const employeeInformation = (state: IAppState): IEmployee => state.employeeState.employeeDetails;
