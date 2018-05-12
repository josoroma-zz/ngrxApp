import { Action } from '@ngrx/store';

export enum AppActionTypes {
  TEST_ME = '[App] TestMe'
}

export class TestMe implements Action {
  readonly type = AppActionTypes.TEST_ME;
  constructor(public payload: any) {}
}

export type All =
  | TestMe
