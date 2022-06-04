import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentLoginRoutingModule } from './student-login-routing.module';
import { StudentLoginComponent } from './student-login.component';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';


@NgModule({
  declarations: [
    StudentLoginComponent
  ],
  imports: [
    CommonModule,
    StudentLoginRoutingModule,
    NgSharedModule,
    MaterialComponentsModule
  ]
})
export class StudentLoginModule { }
