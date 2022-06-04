import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMasterRoutingModule } from './student-master-routing.module';
import { StudentMasterComponent } from './student-master.component';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';

@NgModule({
  declarations: [
    StudentMasterComponent
  ],
  imports: [
    CommonModule,
    StudentMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule
  ]
})
export class StudentMasterModule { }
