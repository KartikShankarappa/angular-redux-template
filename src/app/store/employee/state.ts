export interface IEmployeeState {
  employees: IEmployee[];
  employeeDetails: IEmployee;
  error: string;
}

export interface IEmployee {
  employeeId: string;
  firstName: string;
  lastName: string;
  emailId: string;
  age: string;
  gender: string;
}

