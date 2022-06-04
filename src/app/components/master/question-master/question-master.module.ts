import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionMasterRoutingModule } from './question-master-routing.module';
import { QuestionMasterComponent } from './question-master.component';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { SharedComponentModule } from '../../common/shared-component/shared-component.module';

@NgModule({
  declarations: [
    QuestionMasterComponent
  ],
  imports: [
    CommonModule,
    QuestionMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule,
    SharedComponentModule
  ]
})
export class QuestionMasterModule { }
