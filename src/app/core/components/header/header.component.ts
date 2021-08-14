import { Component } from '@angular/core';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private youtubeService: YoutubeService) { }

  onSubmit(event: any) {
    event.preventDefault();
    this.youtubeService.formSubmitted();
  }

  onFilterClicked() {
    this.youtubeService.filterClicked();
  }

}
