import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedComponentRoutingModule } from './shared-component-routing.module';
import { ExcelFileSelectComponent } from './excel-file-select/excel-file-select.component';
import { MaterialComponentsModule } from '../../materialcomponents/material-components-module';

@NgModule({
  declarations: [
    ExcelFileSelectComponent
  ],
  imports: [
    CommonModule,
    SharedComponentRoutingModule,
    MaterialComponentsModule
  ],
  exports: [
    ExcelFileSelectComponent
  ]
})
export class SharedComponentModule { }
