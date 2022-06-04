import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffMasterRoutingModule } from './staff-master-routing.module';
import { StaffMasterComponent } from './staff-master.component';
import { NgSharedModule } from '../../ngshared/ng-shared-module';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';

@NgModule({
  declarations: [
    StaffMasterComponent
  ],
  imports: [
    CommonModule,
    StaffMasterRoutingModule,
    NgSharedModule,
    MaterialComponentsModule
  ]
})
export class StaffMasterModule { }
