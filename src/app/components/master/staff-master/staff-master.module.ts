import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffMasterRoutingModule } from './staff-master-routing.module';
import { StaffMasterComponent } from './staff-master.component';
import { MaterialComponentsModule } from 'src/app/materialcomponents/material-components-module';
import { NgSharedModule } from 'src/app/materialcomponents/ngshared/ng-shared-module';

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
