import { NgModule } from '@angular/core';
import { DateDisplayPipePipe } from './custompipes/date-display-pipe.pipe';
import { YesnoPipe } from './custompipes/yesno.pipe';
import { UpperCaseDirective } from './directive/upper-case.directive';
import { SemesterPipe } from './custompipes/semester.pipe';



@NgModule({
  declarations: [UpperCaseDirective, DateDisplayPipePipe, YesnoPipe, SemesterPipe],
  exports: [UpperCaseDirective, DateDisplayPipePipe, YesnoPipe]
})
export class CustomLibraryModule { }
