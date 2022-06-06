import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateDisplayPipe',
  pure: false
})
export class DateDisplayPipePipe implements PipeTransform {

  public datePipe: DatePipe = new DatePipe('en-US');

  transform(dbDate: string): any {

    return this.datePipe.transform(dbDate, 'dd-MMM-yyyy');
  }

}
