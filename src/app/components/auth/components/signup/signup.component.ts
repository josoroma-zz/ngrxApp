import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';

import { User } from '../../../../models/user';

import { LoggerService } from '../../../../services/logger.service';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [LoggerService]
})
export class SignupComponent implements OnInit {
  private logger: LoggerService;

  user: User = new User();

  emailFormControl = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(100)]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  matcher = new MyErrorStateMatcher();

  constructor(logger: LoggerService) {
    this.logger = logger;
    this.user.email= '@';
    this.user.password = '';
  }

  ngOnInit() {
  }

  onSubmit() {
    this.logger.logInfo('onSubmit');
    this.logger.logInfo(this.user);
  }
}
