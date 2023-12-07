import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

import { PichinchaButtonModule, PichinchaCheckBoxModule, PichinchaDividerModule, PichinchaInputModule, PichinchaLinkButtonModule, PichinchaReactiveControlsModule, PichinchaTypographyModule } from '@pichincha/ds-angular';

const WEB_COMPONENTS = [
  PichinchaTypographyModule,
  PichinchaButtonModule,
  PichinchaDividerModule,
  PichinchaInputModule,
  PichinchaLinkButtonModule,
  PichinchaCheckBoxModule
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    WEB_COMPONENTS,
    PichinchaReactiveControlsModule
  ]
})
export class AuthModule { }
