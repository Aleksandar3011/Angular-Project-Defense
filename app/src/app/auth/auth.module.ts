import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AngularMaterialModule } from '../angular-material.module';
// import { AuthInterceptor } from './auth-interceptor';
// import { ErrorInterceptor } from '../error-interceptor';
import { ErrorComponent } from '../error/error.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ErrorInterceptor } from '../error-interceptor';
import { AuthInterceptor } from './auth-interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    AngularMaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AuthRoutingModule
  ],
  // providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
  //             {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],

  entryComponents: [ErrorComponent]
})
export class AuthModule { }
