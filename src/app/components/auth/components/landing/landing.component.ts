import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { User } from '../../../../models/user';

import { LoggerService } from '../../../../services/logger.service';

// App and Auth Actions.
import * as AuthActions from '../../actions/auth.actions';
// State and State Slices.
import * as fromAuth from '../../reducers/';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  getAuthState: Observable<any>;

  isAuthenticated: false;
  user = null;
  errorMessage = null;

  constructor(private logger: LoggerService, private store: Store<fromAuth.State>) {
    this.getAuthState = this.store.select(fromAuth.selectAuthState);

    this.logger.logInfo('LoginComponent - constructor - this.getAuthState');
    this.logger.logInfo(this.getAuthState);
  }

  ngOnInit() {
    this.getAuthState.subscribe((state) => {
      this.isAuthenticated = state.isAuthenticated;
      this.user = state.user;
      this.errorMessage = state.errorMessage;
    });
  }

  logOut(): void {
    this.store.dispatch(new AuthActions.LogOut);
  }
}
