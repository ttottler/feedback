import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackTypeMasterRoutingModule } from './feedback-type-master-routing.module';
import { FeedbackTypeMasterComponent } from './feedback-type-master.component';
import { SharedComponentModule } from '../../common/shared-component/shared-component.module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';
import { NgSharedModule } from '../../ngshared/ng-shared-module';


@NgModule({
  declarations: [
    FeedbackTypeMasterComponent
  ],
  imports: [
    CommonModule,
    FeedbackTypeMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule,
    SharedComponentModule
  ]
})
export class FeedbackTypeMasterModule { }
