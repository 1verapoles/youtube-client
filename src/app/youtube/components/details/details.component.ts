import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
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
    this.youtubeService.getItems(`videos?id=${this.currentSearchItem.id}&part=snippet, statistics`)
      .subscribe((data: any) => {
        if (!data.items[0].snippet.title) {
          this.router.navigate(['/**']);
          return;
        } else {
          this.currentSearchItem = data.items[0];
        }
      });
  }


}
