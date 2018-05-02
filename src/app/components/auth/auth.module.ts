import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Use two-way data binding for form inputs.
 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { MaterialModule } from '../../shared/material/material.module';
import { LoggerService } from '../../services/logger.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LandingComponent, SignupComponent, LoginComponent],
  providers: [LoggerService]
})
export class AuthModule { }
