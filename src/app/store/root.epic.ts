import { Injectable } from '@angular/core';
import { combineEpics } from 'redux-observable';

@Injectable()
export class RootEpics {
  constructor() {}

  getRootEpic() {
    return combineEpics();
  }
}
