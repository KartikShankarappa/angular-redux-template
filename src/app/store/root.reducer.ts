import { IAppState } from './app-state.interface';
import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers<IAppState>({
  router: routerReducer
});
