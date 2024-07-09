import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyValue',
  standalone: true,
})
export class EmptyValuePipe implements PipeTransform {
  transform(value: any): any {
    if (value === 'null' || typeof value === 'object' || Array.isArray(value) || value == null) {
      return '-';
    } else {
      return value || value === 0 ? value : '-';
    }
  }
}
