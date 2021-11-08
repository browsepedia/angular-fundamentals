import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doubleIt',
})
export class DoublePipe implements PipeTransform {
  transform(value: number | string) {
    if (typeof value === 'string') {
      return Number(value) * 2;
    }

    return value * 2;
  }
}
