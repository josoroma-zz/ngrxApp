import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { User } from '../../../../models/user';

import { LoggerService } from '../../../../services/logger.service';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [LoggerService]
})
export class SignupComponent implements OnInit {
  private logger: LoggerService;

  user: User = new User();

  signupForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.user.email= '@';
    this.user.password = '';
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    this.email.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .subscribe(data => {
        this.logger.logInfo('SignupComponent - ngOnInit - this.email.valueChanges - data');
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
    this.signupForm = new FormGroup({
      email: this.email,
      password: this.password
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.logger.logInfo('SignupComponent - onSubmit - this.signupForm.value');
      this.logger.logInfo(this.signupForm.value);
      this.signupForm.reset();
    }
  }
}
