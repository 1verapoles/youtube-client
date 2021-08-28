import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  constructor(public youtubeService: YoutubeService, private store: Store) { }

  public searchItems1: Observable<SearchItem[]> = this.store.pipe(map((r: any) => { return [...r.youtube.customCards, ...r.youtube.searchCards]; }));

  get filterBy(): undefined | string {
    return this.youtubeService.filterBy;
  }

  get sortOrderViews(): undefined | boolean {
    return this.youtubeService.sortOrderViews;
  }

  get sortOrderDate(): undefined | boolean {
    return this.youtubeService.sortOrderDate;
  }

}
