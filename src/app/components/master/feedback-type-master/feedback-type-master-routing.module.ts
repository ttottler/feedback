import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackTypeMasterComponent } from './feedback-type-master.component';

const routes: Routes = [{ path: '', component: FeedbackTypeMasterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedbackTypeMasterRoutingModule { }
