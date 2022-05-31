import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackentryComponent } from './feedbackentry/feedbackentry.component';
import { QuestionmasterComponent } from './questionmaster/questionmaster.component';
import { StaffmasterComponent } from './staffmaster/staffmaster.component';
import { StudentSubjectMasterComponent } from './student-subject-master/student-subject-master.component';
import { StudentmasterComponent } from './studentmaster/studentmaster.component';
import { SubjectmasterComponent } from './subjectmaster/subjectmaster.component';

const routes: Routes = [
  { path: 'studentmaster', component: StudentmasterComponent},
  { path: 'questionmaster', component: QuestionmasterComponent},
  { path: 'staffmaster', component: StaffmasterComponent},
  { path: 'subjectmaster', component: SubjectmasterComponent},
  { path: 'student-subject-master', component: StudentSubjectMasterComponent},
  { path: 'feedback-entry', component: FeedbackentryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
