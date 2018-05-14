import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { User } from '../../../../models/user';

import { LoggerService } from '../../../../services/logger.service';

import * as AuthActions from '../../actions/auth.actions';
import * as fromAuth from '../../reducers/';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user: User = new User();
  getAuthState: Observable<any>;
  errorMessage: string | null;

  signupForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private logger: LoggerService, private store: Store<fromAuth.State>) {
    this.getAuthState = this.store.select(fromAuth.selectAuthState);

    this.logger.logInfo('SignupComponent - constructor - this.getAuthState');
    this.logger.logInfo(this.getAuthState);
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.getAuthState.subscribe((state) => {
      this.logger.logInfo('SignupComponent ==> ngOnInit - this.getAuthState.subscribe - state.errorMessage');
      this.logger.logInfo(state.errorMessage);

      this.errorMessage = state.errorMessage;
    });
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
    this.signupForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.logger.logInfo('SignupComponent - onSubmit - this.signupForm.value');
      this.logger.logInfo(this.signupForm.value);

      this.store.dispatch(new AuthActions.SignUp(this.signupForm.value));

      this.signupForm.reset();
    }
  }
}
