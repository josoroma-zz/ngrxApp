import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  declarations: [LandingComponent, SignupComponent, LoginComponent]
})
export class AuthModule { }
