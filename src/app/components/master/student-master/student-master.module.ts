import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentMasterRoutingModule } from './student-master-routing.module';
import { StudentMasterComponent } from './student-master.component';
import { MaterialComponentsModule } from 'src/app/materialcomponents/material-components-module';
import { NgSharedModule } from 'src/app/materialcomponents/ngshared/ng-shared-module';

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
