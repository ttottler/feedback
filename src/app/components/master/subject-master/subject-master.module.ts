import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectMasterRoutingModule } from './subject-master-routing.module';
import { SubjectMasterComponent } from './subject-master.component';
import { MaterialComponentsModule } from 'src/app/materialcomponents/material-components-module';
import { NgSharedModule } from 'src/app/materialcomponents/ngshared/ng-shared-module';

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
