import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'youtube';
  isFormSubmitted: boolean = false;
  isFiltering: boolean = false;
  filterTerm: undefined | string = undefined;
  viewsTerm: undefined | boolean = undefined;
  dateTerm: undefined | boolean = undefined;

  formSubmitted() {
    if (!this.isFormSubmitted) { this.isFormSubmitted = true; }
  }

  filterClicked() {
    this.isFiltering = !this.isFiltering;
  }

  changeFilterTerm(term: string) {
    this.filterTerm = term;
  }

  changeViewsTerm() {
    if (this.viewsTerm === undefined) { this.viewsTerm = true; }
    this.viewsTerm = !this.viewsTerm;
  }

  changeDateTerm() {
    if (this.dateTerm === undefined) { this.dateTerm = true; }
    this.dateTerm = !this.dateTerm;
  }
}
