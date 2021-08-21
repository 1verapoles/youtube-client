import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'sortViews'
})
export class SortViewsPipe implements PipeTransform {

  transform(items: SearchItem[], sortOrderViews: boolean | undefined): any {
    if (sortOrderViews === undefined) { return items; }
    if (sortOrderViews === true) {
      return [...items].sort(function (a: SearchItem, b: SearchItem) { return Number(a.statistics.viewCount) - Number(b.statistics.viewCount); });
    }
    if (sortOrderViews === false) {
      return [...items].sort(function (a: SearchItem, b: SearchItem) { return Number(b.statistics.viewCount) - Number(a.statistics.viewCount); });
    }
  }

}
