import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {

  transform(items: SearchItem[], term: string | undefined): SearchItem[] {
    if (term === undefined) { return items; }
    return items.filter(function (item) { return item.snippet.title.toLowerCase().includes(term.toLowerCase()); });
  }

}
