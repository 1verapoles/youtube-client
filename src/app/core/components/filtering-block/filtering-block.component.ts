import { Component, Input } from '@angular/core';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.css']
})
export class FilteringBlockComponent {
  get viewsTerm(): undefined | boolean {
    return this.youtubeService.viewsTerm;
  }

  get dateTerm(): undefined | boolean {
    return this.youtubeService.dateTerm;
  }

  constructor(private youtubeService: YoutubeService) { }

  onFilterChange(inputValue: string) {
    this.youtubeService.changeFilterTerm(inputValue);
  }

  onViewsChange() {
    this.youtubeService.changeViewsTerm();
  }

  onDateChange() {
    this.youtubeService.changeDateTerm();
  }

}
