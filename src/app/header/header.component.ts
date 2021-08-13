import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Output() onFormSubmit = new EventEmitter<void>();
  @Output() onFilterClick = new EventEmitter<void>();

  onSubmit(event: any) {
    event.preventDefault();
    this.onFormSubmit.emit();
  }

  onFilterClicked() {
    this.onFilterClick.emit();
  }

}
