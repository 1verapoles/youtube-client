import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeComponent } from './youtube.component';
import { BorderDirective } from './directives/border.directive';
import { FilterItemsPipe } from './pipes/filter-items.pipe';
import { SortViewsPipe } from './pipes/sort-views.pipe';
import { SortDatePipe } from './pipes/sort-date.pipe';
import { CoreModule } from '../core/core.module';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { DetailsComponent } from './components/details/details.component';
import { Border2Directive } from './directives/border2.directive';

@NgModule({
  declarations: [
    YoutubeComponent,
    SearchItemComponent,
    SearchResultsComponent,
    BorderDirective,
    Border2Directive,
    FilterItemsPipe,
    SortViewsPipe,
    SortDatePipe,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    CoreModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
