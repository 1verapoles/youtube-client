import { Component, Input } from '@angular/core';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.css']
})
export class FilteringBlockComponent {
  get sortOrderViews(): undefined | boolean {
    return this.youtubeService.sortOrderViews;
  }

  get sortOrderDate(): undefined | boolean {
    return this.youtubeService.sortOrderDate;
  }

  constructor(private youtubeService: YoutubeService) { }

  onFilterChange(inputValue: string) {
    this.youtubeService.changeFilterBy(inputValue);
  }

  onViewsChange() {
    this.youtubeService.changeSortOrderViews();
  }

  onDateChange() {
    this.youtubeService.changeSortOrderDate();
  }

}
