import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectMasterComponent } from './subject-master.component';

const routes: Routes = [{ path: '', component: SubjectMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectMasterRoutingModule { }
