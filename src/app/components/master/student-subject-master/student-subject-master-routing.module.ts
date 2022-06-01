import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentSubjectMasterComponent } from './student-subject-master.component';

const routes: Routes = [{ path: '', component: StudentSubjectMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentSubjectMasterRoutingModule { }
