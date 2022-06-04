import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSubjectMasterRoutingModule } from './student-subject-master-routing.module';
import { StudentSubjectMasterComponent } from './student-subject-master.component';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';

@NgModule({
  declarations: [
    StudentSubjectMasterComponent
  ],
  imports: [
    CommonModule,
    StudentSubjectMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule
  ]
})
export class StudentSubjectMasterModule { }
