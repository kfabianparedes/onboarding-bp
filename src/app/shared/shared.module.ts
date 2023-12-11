import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { PichinchaAlertsModule } from '@pichincha/ds-angular';

const COMPONENTS = [
  AlertComponent
]

const WEB_COMPONENTS = [
  PichinchaAlertsModule
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    ...WEB_COMPONENTS
  ],
  exports:[
    AlertComponent
  ]
})
export class SharedModule { }
