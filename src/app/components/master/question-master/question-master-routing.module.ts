import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackMasterComponent } from '../feedback-master/feedback-master.component';
import { QuestionMasterComponent } from './question-master.component';

const routes: Routes = [
  { path: '', component: QuestionMasterComponent },
  { path: '', component: FeedbackMasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionMasterRoutingModule { }
