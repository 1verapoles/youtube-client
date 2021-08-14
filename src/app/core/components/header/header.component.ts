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
    console.log(1);
    this.youtubeService.formSubmitted();
  }

  onFilterClicked() {
    console.log(3);
    this.youtubeService.filterClicked();
  }

}
