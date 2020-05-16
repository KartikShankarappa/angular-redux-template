import { map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import * as actionTypes from './types';
import * as actions from './actions';
import { ofType } from 'redux-observable-es6-compat';
import { EmployeeService } from '../../../employee.service';

@Injectable()
export class EmployeeEpics {
  constructor(
    private employeeService: EmployeeService
  ) { }

  getAllEmployees() {
    return (action$, store) => {
      return action$.pipe(ofType(actionTypes.GET_ALL_EMPLOYEES),
        mergeMap(payload => {
          return this.employeeService.getAllEmployees()
            .pipe(map(response => actions.getAllEmployeesSuccess(response)),
              catchError(error => of(actions.getAllEmployeesFailed(error))));
        }));
    };
  }

  getEmployeeDetails() {
    return (action$, store) => {
      return action$.pipe(ofType(actionTypes.GET_EMPLOYEE_DETAILS),
        mergeMap(payload => {
          return this.employeeService.getEmployeeDetails(payload)
            .pipe(map(response => actions.getEmployeeDetailsSuccess(response)),
              catchError(error => of(actions.getEmployeeDetailsFailed(error))));
        }));
    };
  }

}
