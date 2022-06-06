import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesno'
})
export class YesnoPipe implements PipeTransform {

  transform(yn: string): any {
    return yn === 'Y' ? 'Yes' : 'No';
  }

}
