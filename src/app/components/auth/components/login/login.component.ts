import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { User } from '../../../../models/user';

import { LoggerService } from '../../../../services/logger.service';

// App and Auth Actions.
import * as AppActions from '../../../../actions/app.actions';
import * as AuthActions from '../../actions/auth.actions';
// State and State Slices.
import * as fromApp from '../../../../reducers/';
import * as fromAuth from '../../reducers/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  getAppState: Observable<any>;
  getAuthState: Observable<any>;
  errorMessage: string | null;

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private logger: LoggerService, private store: Store<fromAuth.State>) {
    this.logger = logger;

    this.getAppState = this.store.select(fromApp.selectAppState);

    this.logger.logInfo('LoginComponent - constructor - this.getAppState');
    this.logger.logInfo(this.getAppState);

    this.getAuthState = this.store.select(fromAuth.selectAuthState);

    this.logger.logInfo('LoginComponent - constructor - this.getAuthState');
    this.logger.logInfo(this.getAuthState);
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.loginForm.valueChanges
      .subscribe(data => {
        this.logger.logInfo('LoginComponent - ngOnInit - this.loginForm.valueChanges - data');
        this.logger.logInfo(data);
      });

    this.getAppState.subscribe((state) => {
      this.logger.logInfo('LoginComponent ==> ngOnInit - this.getAppState.subscribe - state');
      this.logger.logInfo(state);
    });

    this.getAuthState.subscribe((state) => {
      this.logger.logInfo('LoginComponent ==> ngOnInit - this.getAuthState.subscribe - state.errorMessage');
      this.logger.logInfo(state.errorMessage);

      this.errorMessage = state.errorMessage;
    });

    this.store.dispatch(new AppActions.TestMe({ testMe: 'LoginComponent - ngOnInit - Dispatch TestMe' }));
  }

  createFormControls() {
    this.email = new FormControl(this.user.email, [
      Validators.required,
      Validators.email
    ]);

    this.password = new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(8)
    ]);
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.logger.logInfo('LoginComponent - onSubmit - this.loginForm.value');
      this.logger.logInfo(this.loginForm.value);

      this.store.dispatch(new AppActions.TestMe({ testMe: 'LoginComponent - onSubmit - Dispatch TestMe' }));

      this.store.dispatch(new AuthActions.LogIn(this.loginForm.value));

      this.loginForm.reset();
    }
  }
}
