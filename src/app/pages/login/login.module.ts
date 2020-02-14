import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { ComponentsModule } from '@shared/components/components.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ComponentsModule,
    SharedModule
  ]
})

export class LoginModule { }
