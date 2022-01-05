import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list?: any, input?: any): any {
    if (!list) return null;
    if (!input) return list;

    input = input.toLowerCase();

    return list.filter(function (data: any) {
      return JSON.stringify(data).toLowerCase().includes(input);
    });
  }
}
