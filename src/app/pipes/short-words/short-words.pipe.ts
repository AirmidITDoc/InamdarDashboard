import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortWords',
  standalone: true,
})
export class ShortWordsPipe implements PipeTransform {
  transform(value: any): any {
    if (value >= 10000000) {
      value = (value / 10000000).toFixed(2) + ' Cr';
    } else if (value >= 100000) {
      value = (value / 100000).toFixed(2) + ' Lac';
    } else if(value >= 1000) {
      value = (value/1000).toFixed(2) + ' K';
    }
    return value;
  }
}
