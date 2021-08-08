import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilteringBlockComponent } from './filtering-block/filtering-block.component';
import { BorderDirective } from './search/search-results/border.directive';
import { FilterItemsPipe } from './search/search-results/filter-items.pipe';
import { SortViewsPipe } from './search/search-results/sort-views.pipe';
import { SortDatePipe } from './search/search-results/sort-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    FilteringBlockComponent,
    BorderDirective,
    FilterItemsPipe,
    SortViewsPipe,
    SortDatePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
