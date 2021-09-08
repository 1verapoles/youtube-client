import { Injectable } from '@angular/core';
import { SearchResponse } from '../models/search-response.model';
import itemsResponse from '../../../assets/response.json';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  isFormSubmitted: boolean = false;
  isFiltering: boolean = false;
  filterBy: undefined | string = undefined;
  sortOrderViews: undefined | boolean = undefined;
  sortOrderDate: undefined | boolean = undefined;

  constructor(private http: HttpClient) { }

  getItems(inputValue: string) {
    return this.http.get(inputValue).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      }
      )
    );
  }

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
