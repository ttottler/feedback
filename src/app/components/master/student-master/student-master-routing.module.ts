import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentMasterComponent } from './student-master.component';

const routes: Routes = [{ path: '', component: StudentMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentMasterRoutingModule { }
