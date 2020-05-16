import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    {
      employeeId: '1',
      firstName: 'abc1',
      lastName: 'xyz1',
      emailId: 'abc1.xyz1@gmail.com',
      age: '20',
      gender: 'Male'
    },
    {
      employeeId: '2',
      firstName: 'abc2',
      lastName: 'xyz2',
      emailId: 'abc2.xyz2@gmail.com',
      age: '30',
      gender: 'Female'
    },
    {
      employeeId: '3',
      firstName: 'abc3',
      lastName: 'xyz3',
      emailId: 'abc3.xyz3@gmail.com',
      age: '50',
      gender: 'Male'
    }
  ];

  constructor() { }

  getAllEmployees(): Observable<any> {
    return of(this.employees);
  }

  getEmployeeDetails(request: any): Observable<any> {
    const employees = this.employees.filter(e => {
      return e.employeeId === request.payload.employeeId ? true : false;
    });
    const employee = (employees && employees.length > 0) ? employees[0] : null;
    return of(employee);
  }

}
