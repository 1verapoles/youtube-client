import { Component, OnInit } from '@angular/core';
import { SearchResponse } from '../search-response.model';
import itemsResponse from '../../../assets/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchItems: SearchResponse = itemsResponse;

  constructor() { }

  ngOnInit(): void {
  }
}
