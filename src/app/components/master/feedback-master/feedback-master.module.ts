import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackMasterRoutingModule } from './feedback-master-routing.module';
import { FeedbackMasterComponent } from './feedback-master.component';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';
import { SharedComponentModule } from '../../common/shared-component/shared-component.module';

@NgModule({
  declarations: [
    FeedbackMasterComponent
  ],
  imports: [
    CommonModule,
    FeedbackMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule,
    SharedComponentModule
  ]
})
export class FeedbackMasterModule { }
