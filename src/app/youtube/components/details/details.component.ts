import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { SearchResponse } from '../../models/search-response.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string = '';
  videoThumbnail: string = '';
  videoTitle: string = '';
  viewsCount: string = '';
  description: string = '';
  likeCount: string = '';
  dislikeCount: string = '';
  commentCount: string = '';
  publishedAt: string = '';

  constructor(private youtubeService: YoutubeService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => this.id = params['id']);
  }

  ngOnInit(): void {
    const data = this.searchItems.items.find(item => item.id === this.id);
    if (!data) {
      this.router.navigate(['/**']);
      return;
    } else {
      this.videoThumbnail = data?.['snippet']?.['thumbnails']?.['medium']?.['url'];
      this.videoTitle = data?.['snippet']?.['title'];
      this.description = data?.['snippet']?.['description'];
      this.viewsCount = data?.['statistics']?.['viewCount'];
      this.likeCount = data?.['statistics']?.['likeCount'];
      this.dislikeCount = data?.['statistics']?.['dislikeCount'];
      this.commentCount = data?.['statistics']?.['commentCount'];
      this.publishedAt = data?.['snippet']?.['publishedAt'];
    }
  }

  get searchItems(): SearchResponse {
    return this.youtubeService.searchItems;
  }



}
