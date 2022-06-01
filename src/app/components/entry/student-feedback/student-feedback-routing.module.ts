import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFeedbackComponent } from './student-feedback.component';

const routes: Routes = [{ path: '', component: StudentFeedbackComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentFeedbackRoutingModule { }
