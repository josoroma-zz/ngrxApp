import {
  ActionReducerMap,
  createSelector,
  createFeatureSelector,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../environments/environment';

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromApp from './app.reducer';
import * as fromAuth from '../components/auth/reducers/auth.reducer'

export interface State {
  app: fromApp.State,
  auth: fromAuth.State
}

export const reducers: ActionReducerMap<State> = {
  app: fromApp.reducer,
  auth: fromAuth.reducer
};

/**
 * console.log all Actions.
 */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: any): State {
    console.log('==> App Reducers ==> Logger - State: ', state);
    console.log('==> App Reducers ==> Logger - Action: ', action);

    return reducer(state, action);
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [logger, storeFreeze]
  : [];

/**
 * State Slices
 */
export const selectAppState = createFeatureSelector<State>('app');
