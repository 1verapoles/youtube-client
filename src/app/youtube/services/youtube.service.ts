import { Injectable } from '@angular/core';
import { SearchResponse } from '../models/search-response.model';
import itemsResponse from '../../../assets/response.json';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  searchItems: SearchResponse = itemsResponse;
  isFormSubmitted: boolean = false;
  isFiltering: boolean = false;
  filterBy: undefined | string = undefined;
  sortOrderViews: undefined | boolean = undefined;
  sortOrderDate: undefined | boolean = undefined;

  formSubmitted() {
    if (!this.isFormSubmitted) { this.isFormSubmitted = true; }
  }

  filterClicked() {
    this.isFiltering = !this.isFiltering;
  }

  changeFilterBy(inputValue: string) {
    this.filterBy = inputValue;
  }

  changeSortOrderViews() {
    if (this.sortOrderViews === undefined) { this.sortOrderViews = true; }
    this.sortOrderViews = !this.sortOrderViews;
  }

  changeSortOrderDate() {
    if (this.sortOrderDate === undefined) { this.sortOrderDate = true; }
    this.sortOrderDate = !this.sortOrderDate;
  }
}
