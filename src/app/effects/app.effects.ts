import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import { tap } from 'rxjs/operators';

import {
  AppActionTypes,
  TestMe
} from '../actions/app.actions';

@Injectable()
export class AppEffects {

  constructor(
    private actions: Actions
  ) { }

  @Effect({ dispatch: false })
  TestMe: Observable<any> = this.actions
    .ofType(AppActionTypes.TEST_ME)
    .map((action: TestMe) => action.payload)
    .switchMap(payload => {
      let promise = Promise.resolve({ testMe: payload.testMe + ' ' + (+new Date) });
      console.log('App Effects ==> Promise: ', promise);
      return promise;
    });
}

