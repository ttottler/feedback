import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFeedbackRoutingModule } from './student-feedback-routing.module';
import { StudentFeedbackComponent } from './student-feedback.component';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';
import { SharedComponentModule } from '../../common/shared-component/shared-component.module';


@NgModule({
  declarations: [
    StudentFeedbackComponent
  ],
  imports: [
    CommonModule,
    StudentFeedbackRoutingModule,
    NgSharedModule,
    MaterialComponentsModule,
    SharedComponentModule
  ]
})
export class StudentFeedbackModule { }
