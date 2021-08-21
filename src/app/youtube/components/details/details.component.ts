import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { SearchResponse } from '../../models/search-response.model';
import { SearchItemModel } from '../../SearchItemModel';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  currentSearchItem: SearchItem = new SearchItemModel();

  constructor(private youtubeService: YoutubeService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => this.currentSearchItem.id = params['id']);
  }

  ngOnInit(): void {
    const searchedItemById = this.searchItems.items.find(item => item.id === this.currentSearchItem.id);
    if (!searchedItemById) {
      this.router.navigate(['/**']);
      return;
    } else {
      this.currentSearchItem = searchedItemById;
    }
  }

  get searchItems(): SearchResponse {
    return this.youtubeService.searchItems;
  }



}
