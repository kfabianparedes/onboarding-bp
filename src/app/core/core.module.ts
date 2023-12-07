import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { PichinchaButtonModule, PichinchaCheckBoxModule, PichinchaDividerModule, PichinchaInputModule, PichinchaLinkButtonModule, PichinchaTypographyModule } from '@pichincha/ds-angular';
import { AdminComponent } from './pages/admin/admin.component';

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
    CoreComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    WEB_COMPONENTS
  ]
})
export class CoreModule { }
