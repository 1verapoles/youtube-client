import { Component } from '@angular/core';
import { LoginService } from 'src/app/auth/services/login.service';
import { YoutubeService } from 'src/app/youtube/services/youtube.service';
import { Observable, fromEvent, pipe } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';
import { INPUT_MIN_CHARACTERS } from '../../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private youtubeService: YoutubeService, public loginService: LoginService) { }

  onKeyUp(e: any): void {
    fromEvent(e.target, 'keyup')
      .pipe(
        map((input: any) => input.target.value),
        map((value: string) => value.trim()),
        filter((query: string) => query.length >= INPUT_MIN_CHARACTERS),
        debounceTime(2000),
        distinctUntilChanged(),
        switchMap(input => this.youtubeService.getItems(`search?type=video&part=snippet&maxResults=15&q=${input}`)),
        switchMap((data: any) => {
          let allIds = data.items.map((item: any) => item.id.videoId).toString();
          return this.youtubeService.getItems(`videos?id=${allIds}&part=snippet, statistics`);
        }),
      ).subscribe((data) => {
        this.youtubeService.changeSearchItems(data);
      });
  }

  onFilterClicked(): void {
    this.youtubeService.filterClicked();
  }

  onLogout(): void {
    this.loginService.onLogout();
  }

}

