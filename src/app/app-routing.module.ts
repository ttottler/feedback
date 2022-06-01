import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'master/question', loadChildren: () => import('./components/master/question-master/question-master.module').then(m => m.QuestionMasterModule) },
  { path: 'master/student', loadChildren: () => import('./components/master/student-master/student-master.module').then(m => m.StudentMasterModule) },
  { path: 'master/staff', loadChildren: () => import('./components/master/staff-master/staff-master.module').then(m => m.StaffMasterModule) },
  { path: 'master/subject', loadChildren: () => import('./components/master/subject-master/subject-master.module').then(m => m.SubjectMasterModule) },
  { path: 'master/student-subject', loadChildren: () => import('./components/master/student-subject-master/student-subject-master.module').then(m => m.StudentSubjectMasterModule) },
  { path: 'feedback/student', loadChildren: () => import('./components/entry/student-feedback/student-feedback.module').then(m => m.StudentFeedbackModule) },
  { path: 'master/feedbacktype', loadChildren: () => import('./components/master/feedback-master/feedback-master.module').then(m => m.FeedbackMasterModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
