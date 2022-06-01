import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackMasterComponent } from './feedback-master.component';

const routes: Routes = [{ path: '', component: FeedbackMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackMasterRoutingModule { }
