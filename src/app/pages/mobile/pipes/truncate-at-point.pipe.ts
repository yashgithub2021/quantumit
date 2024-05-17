import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateAtPoint'
})
export class TruncateAtPointPipe implements PipeTransform {

  transform(value: string): string {
    const indexOfDot = value.indexOf('.');
    if (indexOfDot !== -1) {
      return value.substring(0, indexOfDot + 1);
    }
    return value;
  }

}
