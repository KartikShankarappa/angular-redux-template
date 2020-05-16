import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';
import { EmployeeEpics } from './employee/actions/epics';

@Injectable()
export class RootEpics {
  constructor(private employeeEpics: EmployeeEpics) {}

  getRootEpic() {
    return combineEpics(
      this.employeeEpics.getAllEmployees(),
      this.employeeEpics.getEmployeeDetails()
    );
  }
}
