import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectMasterRoutingModule } from './subject-master-routing.module';
import { SubjectMasterComponent } from './subject-master.component';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';

@NgModule({
  declarations: [
    SubjectMasterComponent
  ],
  imports: [
    CommonModule,
    SubjectMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule
  ]
})
export class SubjectMasterModule { }
