import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentFeedbackRoutingModule } from './student-feedback-routing.module';
import { StudentFeedbackComponent } from './student-feedback.component';
import { NgSharedModule } from 'src/app/materialcomponents/ngshared/ng-shared-module';
import { MaterialComponentsModule } from 'src/app/materialcomponents/material-components-module';


@NgModule({
  declarations: [
    StudentFeedbackComponent
  ],
  imports: [
    CommonModule,
    StudentFeedbackRoutingModule,
    NgSharedModule,
    MaterialComponentsModule
  ]
})
export class StudentFeedbackModule { }
