import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(items: SearchItem[], sortOrderDate: boolean | undefined): any {
    if (sortOrderDate === undefined) { return items; }
    if (sortOrderDate === true) {
      return [...items].sort(function (a: SearchItem, b: SearchItem) { return new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime(); });
    }
    if (sortOrderDate === false) {
      return [...items].sort(function (a: SearchItem, b: SearchItem) { return new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime(); });
    }
  }

}
