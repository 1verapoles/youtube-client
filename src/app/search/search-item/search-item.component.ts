import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent {

  @Input() videoThumbnail: string = '';
  @Input() videoTitle: string = '';
  @Input() viewsCount: string = '';
  @Input() likeCount: string = '';
  @Input() dislikeCount: string = '';
  @Input() commentCount: string = '';
  @Input() publishedAt: string = '';

}
