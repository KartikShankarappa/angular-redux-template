import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevToolsExtension, NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './app-state.interface';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';
import { createEpicMiddleware } from 'redux-observable-es6-compat';
import { rootReducer } from './root.reducer';
import { RootEpics } from './root.epic';
import { EmployeeEpics } from './employee/actions/epics';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule,
    NgReduxRouterModule
  ],
  declarations: [],
  providers: [
    NgReduxRouter,
    RootEpics,
    EmployeeEpics
  ]
})
export class StoreModule {
  constructor(
    public store: NgRedux<IAppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics
  ) {
    const currentState = JSON.parse(sessionStorage.getItem('redux-state'));

    const epicMiddleware = createEpicMiddleware();

    store.configureStore(
      rootReducer,
      currentState ? currentState : undefined,
      [epicMiddleware],
      devTools.isEnabled() ? [devTools.enhancer()] : []);

    epicMiddleware.run(rootEpics.getRootEpic());

    store.subscribe(() => {
      sessionStorage.setItem('redux-state', JSON.stringify(store.getState()));
    });

    ngReduxRouter.initialize();
  }
}
