import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedbackMasterRoutingModule } from './feedback-master-routing.module';
import { FeedbackMasterComponent } from './feedback-master.component';
import { MaterialComponentsModule } from 'src/app/materialcomponents/material-components-module';
import { NgSharedModule } from 'src/app/materialcomponents/ngshared/ng-shared-module';


@NgModule({
  declarations: [
    FeedbackMasterComponent
  ],
  imports: [
    CommonModule,
    FeedbackMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule
  ]
})
export class FeedbackMasterModule { }
