import { Component, OnInit, Input } from '@angular/core';
import { SearchResponse } from '../search-response.model';
import itemsResponse from '../../../assets/response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  searchItems: SearchResponse = itemsResponse;
  @Input() filterTerm: undefined | string = undefined;
  @Input() viewsTerm: undefined | boolean = undefined;
  @Input() dateTerm: undefined | boolean = undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
