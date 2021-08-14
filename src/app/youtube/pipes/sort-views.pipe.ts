import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortViews'
})
export class SortViewsPipe implements PipeTransform {

  transform(items: SearchItem[], term: boolean | undefined): any {
    if (term === undefined) { return items; }
    if (term === true) {
      return [...items].sort(function (a: SearchItem, b: SearchItem) { return Number(a.statistics.viewCount) - Number(b.statistics.viewCount); });
    }
    if (term === false) {
      return [...items].sort(function (a: SearchItem, b: SearchItem) { return Number(b.statistics.viewCount) - Number(a.statistics.viewCount); });
    }
  }

}
