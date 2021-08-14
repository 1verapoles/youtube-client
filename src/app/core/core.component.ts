import { Component } from '@angular/core';
import { YoutubeService } from '../youtube/services/youtube.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  //isFormSubmitted: boolean = this.youtubeService.isFormSubmitted;
  isFiltering: boolean = this.youtubeService.isFiltering;

  constructor(private youtubeService: YoutubeService) { console.log('888', this.isFiltering); }

}
