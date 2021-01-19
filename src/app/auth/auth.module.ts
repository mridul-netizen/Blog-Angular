import {NgModule} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {AngularMaterialModule} from '../angular-material.module';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthRoutingModule} from './auth-routing.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    AuthRoutingModule
  ]
})
export class AuthModule {}
