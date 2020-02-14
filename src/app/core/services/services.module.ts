import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {
  ElectronService,
  HttpService,
  ErrorService,
  LoginService,
  UserService,
  ArticlesService
  } from './services.index';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ElectronService,
    HttpService,
    ErrorService,
    LoginService,
    UserService,
    ArticlesService
  ]
})

export class ServicesModule { }
