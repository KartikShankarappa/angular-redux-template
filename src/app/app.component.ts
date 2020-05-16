import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from './store/app-state.interface';
import { getAllEmployees, getEmployeeDetails } from './store/employee/actions/actions';
import { Observable } from 'rxjs';
import { employeeList, employeeInformation } from './store/employee/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @select(employeeList) readonly employeeList$: Observable<any>;
  @select(employeeInformation) readonly employeeInformation$: Observable<any>;

  title = 'angular-redux-basic';

  employees = [];
  employeeDetails = null;

  constructor(
    private router: Router,
    private ngRedux: NgRedux<IAppState>
  ) { }

  ngOnInit() {
    // reset redux state on app (re)load
    this.ngRedux.dispatch({
      type: 'RESET_APP_STATE'
    });

    this.employeeList$.subscribe(data => {
      this.employees = [];
      if (data) {
        this.employees = data;
      }
    });

    this.employeeInformation$.subscribe(data => {
      this.employeeDetails = null;
      if (data) {
        this.employeeDetails = data;
      }
    });
  }

  getAllEmployees() {
    this.ngRedux.dispatch(getAllEmployees());
  }

  getEmployeeDetails(empId: string) {
    this.ngRedux.dispatch(getEmployeeDetails({
      employeeId: empId
    }));
  }

  resetData() {
    this.ngRedux.dispatch({
      type: 'RESET_APP_STATE'
    });
  }
}
