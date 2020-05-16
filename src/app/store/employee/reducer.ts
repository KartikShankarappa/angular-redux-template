import { IEmployeeState } from './state';
import * as actionTypes from './actions/types';

const employeeInitialState: IEmployeeState = {
  employees: [],
  employeeDetails: null,
  error: null
};

const actionHandler = {

  [actionTypes.GET_ALL_EMPLOYEES]: (state: IEmployeeState, action: any): IEmployeeState => {
    return {
      ...employeeInitialState
    };
  },

  [actionTypes.GET_ALL_EMPLOYEES_SUCCESS]: (state: IEmployeeState, action: any): IEmployeeState => {
    return {
      ...state,
      employees: action.payload
    };
  },

  [actionTypes.GET_ALL_EMPLOYEES_FAILED]: (state: IEmployeeState, action: any): IEmployeeState => {
    return {
      ...state,
      error: 'Error while getting all employees'
    };
  },

  [actionTypes.GET_EMPLOYEE_DETAILS]: (state: IEmployeeState, action: any): IEmployeeState => {
    return {
      ...state
    };
  },

  [actionTypes.GET_EMPLOYEE_DETAILS_SUCCESS]: (state: IEmployeeState, action: any): IEmployeeState => {
    return {
      ...state,
      employeeDetails: action.payload
    };
  },

  [actionTypes.GET_EMPLOYEE_DETAILS_FAILED]: (state: IEmployeeState, action: any): IEmployeeState => {
    return {
      ...state,
      error: 'Error while getting employee details'
    };
  }

};

export const employeeReducer = (
  state: IEmployeeState = employeeInitialState,
  action
) => {
  const handler = actionHandler[action.type];
  return handler ? handler(state, action) : state;
};
