import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  constructor(private youtubeService: YoutubeService) { }

  get searchItems(): SearchResponse {
    return this.youtubeService.searchItems;
  }

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
