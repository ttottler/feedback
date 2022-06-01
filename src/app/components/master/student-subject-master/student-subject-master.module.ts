import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentSubjectMasterRoutingModule } from './student-subject-master-routing.module';
import { StudentSubjectMasterComponent } from './student-subject-master.component';
import { MaterialComponentsModule } from 'src/app/materialcomponents/material-components-module';
import { NgSharedModule } from 'src/app/materialcomponents/ngshared/ng-shared-module';

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
