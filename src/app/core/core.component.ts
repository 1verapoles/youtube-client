import { Component } from '@angular/core';
import { YoutubeService } from '../youtube/services/youtube.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent {

  get isFiltering(): boolean {
    return this.youtubeService.isFiltering;
  }

  constructor(private youtubeService: YoutubeService) { }

}
