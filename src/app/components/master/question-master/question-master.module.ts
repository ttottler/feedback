import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionMasterRoutingModule } from './question-master-routing.module';
import { QuestionMasterComponent } from './question-master.component';
import { NgSharedModule } from 'src/app/materialcomponents/ngshared/ng-shared-module';
import { MaterialComponentsModule } from 'src/app/materialcomponents/material-components-module';


@NgModule({
  declarations: [
    QuestionMasterComponent
  ],
  imports: [
    CommonModule,
    QuestionMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule
  ]
})
export class QuestionMasterModule { }
