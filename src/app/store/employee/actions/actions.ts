import * as actionTypes from './types';

export const getAllEmployees = () => ({
  type: actionTypes.GET_ALL_EMPLOYEES
});

export const getAllEmployeesSuccess = (payload) => ({
  type: actionTypes.GET_ALL_EMPLOYEES_SUCCESS,
  payload
});

export const getAllEmployeesFailed = (payload) => ({
  type: actionTypes.GET_ALL_EMPLOYEES_FAILED,
  payload
});

export const getEmployeeDetails = (payload) => ({
  type: actionTypes.GET_EMPLOYEE_DETAILS,
  payload
});

export const getEmployeeDetailsSuccess = (payload) => ({
  type: actionTypes.GET_EMPLOYEE_DETAILS_SUCCESS,
  payload
});

export const getEmployeeDetailsFailed = (payload) => ({
  type: actionTypes.GET_EMPLOYEE_DETAILS_FAILED,
  payload
});

