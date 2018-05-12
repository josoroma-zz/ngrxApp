import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromRoot from '../../../reducers/app.reducer';
import * as fromAuth from './auth.reducer';

export interface AuthState {
  auth: fromAuth.State;
}

export interface State extends fromRoot.State {
  auth: AuthState;
}

export const reducers: ActionReducerMap<AuthState> = {
  auth: fromAuth.reducer
};

/**
 * State Slices
 */
export const selectAuthState = createFeatureSelector<AuthState>('auth');
