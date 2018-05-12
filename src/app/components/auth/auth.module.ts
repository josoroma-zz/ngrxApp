import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../shared/material/material.module';

import { AuthRoutingModule } from './auth-routing.module';

import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import * as fromAuth from './reducers/auth.reducer';
import { AuthEffects } from './effects/auth.effects';

// Auth specific services.
import { AuthService } from './services/auth.service';
// Common services.
import { LoggerService } from '../../services/logger.service';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [LandingComponent, SignupComponent, LoginComponent],
  providers: [LoggerService, AuthService]
})
export class AuthModule { }
