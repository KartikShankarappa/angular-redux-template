import { IEmployeeState } from './employee/state';

export interface IAppState {
  employeeState: IEmployeeState;
  router: string;
}
