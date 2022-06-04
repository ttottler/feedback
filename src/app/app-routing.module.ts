import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'master/question', loadChildren: () => import('./components/master/question-master/question-master.module').then(m => m.QuestionMasterModule) },
  { path: 'master/student', loadChildren: () => import('./components/master/student-master/student-master.module').then(m => m.StudentMasterModule) },
  { path: 'master/staff', loadChildren: () => import('./components/master/staff-master/staff-master.module').then(m => m.StaffMasterModule) },
  { path: 'master/subject', loadChildren: () => import('./components/master/subject-master/subject-master.module').then(m => m.SubjectMasterModule) },
  { path: 'master/student-subject', loadChildren: () => import('./components/master/student-subject-master/student-subject-master.module').then(m => m.StudentSubjectMasterModule) },
  { path: 'master/feedbacktype', loadChildren: () => import('./components/master/feedback-master/feedback-master.module').then(m => m.FeedbackMasterModule) },
  { path: 'master/feedback', loadChildren: () => import('./components/master/feedback-type-master/feedback-type-master.module').then(m => m.FeedbackTypeMasterModule) },
  { path: 'feedback/student/entry', loadChildren: () => import('./components/entry/student-feedback/student-feedback.module').then(m => m.StudentFeedbackModule) },
  { path: 'home', loadChildren: () => import('./components/login/home/home.module').then(m => m.HomeModule) },
  { path: 'login/student', loadChildren: () => import('./components/login/student-login/student-login.module').then(m => m.StudentLoginModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
