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
  filterTerm: undefined | string = undefined;
  viewsTerm: undefined | boolean = undefined;
  dateTerm: undefined | boolean = undefined;

  formSubmitted() {
    if (!this.isFormSubmitted) { this.isFormSubmitted = true; }
  }

  filterClicked() {
    this.isFiltering = !this.isFiltering;
  }

  changeFilterTerm(term: string) {
    this.filterTerm = term;
  }

  changeViewsTerm() {
    if (this.viewsTerm === undefined) { this.viewsTerm = true; }
    this.viewsTerm = !this.viewsTerm;
  }

  changeDateTerm() {
    if (this.dateTerm === undefined) { this.dateTerm = true; }
    this.dateTerm = !this.dateTerm;
  }
}
