import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { PichinchaAlertsModule, PichinchaButtonModule, PichinchaCheckBoxModule, PichinchaDividerModule, PichinchaInputModule, PichinchaLinkButtonModule, PichinchaReactiveControlsModule, PichinchaTypographyModule } from '@pichincha/ds-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormService } from './services/form-service/login-form.service';
import { AuthClientService } from './services/client-service/auth-client.service';
import { SigninService } from './services/signin.service';
import { SharedModule } from '../shared/shared.module';
import { SignupService } from './services/form-service/signup.service';

const WEB_COMPONENTS = [
  PichinchaTypographyModule,
  PichinchaButtonModule,
  PichinchaDividerModule,
  PichinchaInputModule,
  PichinchaLinkButtonModule,
  PichinchaCheckBoxModule,
  PichinchaAlertsModule
]

const FORMS = [
  FormsModule,
  ReactiveFormsModule,
  PichinchaReactiveControlsModule
]

const SERVICES = [
  AuthClientService,
  LoginFormService,
  SigninService,
  SignupService
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ...WEB_COMPONENTS,
    ...FORMS,
    SharedModule
  ],
  providers:[
    ...SERVICES
  ]
})
export class AuthModule { }
