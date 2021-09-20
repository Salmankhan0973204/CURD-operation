import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(fruits: any, searchText: any): any {
    if (!fruits) {
      return [];
    }
    if (!searchText) {
      return fruits;
    }
    console.log('dfdaf')

    return fruits.filter(it => {
      return it.name.includes(searchText)
      
    });}
  
  }