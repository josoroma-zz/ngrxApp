import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { User } from '../../../../models/user';

import { LoggerService } from '../../../../services/logger.service';

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
      console.log('onSubmit');
      console.log(this.signupForm.value);
      this.signupForm.reset();
    }
  }
}
