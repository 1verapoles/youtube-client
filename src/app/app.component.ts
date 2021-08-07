import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  isFormSubmitted = false;
  isFiltering = false;

  formSubmitted() {
    if (this.isFormSubmitted === false) { this.isFormSubmitted = true; }
  }

  filterClicked() {
    this.isFiltering = !this.isFiltering;
  }
}
