import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(
    todoCollection: Array<{ label: string; status: string }>,
    filteredStatus: string
  ): Array<{ label: string; status: string }> {
    console.log('[TRANSFORM]');
    if (filteredStatus === '') {
      return todoCollection;
    }

    let resultArray = [];

    for (let todo of todoCollection) {
      if (todo.status === filteredStatus) {
        resultArray.push(todo);
      }
    }

    return resultArray;
  }
}
