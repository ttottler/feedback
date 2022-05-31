import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgSharedModule } from './ngshared/ng-shared-module';
import { MaterialComponentsModule } from './materialcomponents/material-components-module';
import { QuestionmasterComponent } from './questionmaster/questionmaster.component';
import { StudentmasterComponent } from './studentmaster/studentmaster.component';
import { StaffmasterComponent } from './staffmaster/staffmaster.component';
import { SubjectmasterComponent } from './subjectmaster/subjectmaster.component';
import { StudentSubjectMasterComponent } from './student-subject-master/student-subject-master.component';
import { FeedbackentryComponent } from './feedbackentry/feedbackentry.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionmasterComponent,
    StudentmasterComponent,
    StaffmasterComponent,
    SubjectmasterComponent,
    StudentSubjectMasterComponent,
    FeedbackentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgSharedModule,
    MaterialComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
