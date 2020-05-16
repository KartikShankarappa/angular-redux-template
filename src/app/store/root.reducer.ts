import { IAppState } from './app-state.interface';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { employeeReducer } from './employee/reducer';

const appReducer = combineReducers<IAppState>({
  employeeState: employeeReducer,
  router: routerReducer,
});

export const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP_STATE') {
    state = undefined;
  }
  return appReducer(state, action);
};

