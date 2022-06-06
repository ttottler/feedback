import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentLoginRoutingModule } from './student-login-routing.module';
import { StudentLoginComponent } from './student-login.component';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';
import { MomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
  declarations: [
    StudentLoginComponent
  ],
  imports: [
    CommonModule,
    StudentLoginRoutingModule,
    NgSharedModule,
    MaterialComponentsModule,
    MomentDateModule
  ]
})
export class StudentLoginModule { }
