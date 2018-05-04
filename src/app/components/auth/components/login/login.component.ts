import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { User } from '../../../../models/user';

import { LoggerService } from '../../../../services/logger.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoggerService]
})
export class LoginComponent implements OnInit {
  private logger: LoggerService;

  user: User = new User();

  loginForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(logger: LoggerService) {
    this.logger = logger;
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.loginForm.valueChanges
    .subscribe(data => {
      this.logger.logInfo('LoginComponent - ngOnInit - this.loginForm.valueChanges - data');
      this.logger.logInfo(data);
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
    this.loginForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.logger.logInfo('LoginComponent - onSubmit - this.loginForm.value');
      this.logger.logInfo(this.loginForm.value);
      this.loginForm.reset();
    }
  }
}
