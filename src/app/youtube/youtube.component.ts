import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { YoutubeService } from './services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.css']
})
export class YoutubeComponent {

  constructor(public youtubeService: YoutubeService) { }


  get isFiltering(): boolean {
    return this.youtubeService.isFiltering;
  }

  get isFormSubmitted(): boolean {
    return this.youtubeService.isFormSubmitted;
  }

}
