import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onFormSubmit = new EventEmitter();
  @Output() onFilterClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(e: any) {
    e.preventDefault();
    this.onFormSubmit.emit();
  }

  onFilterClicked() {
    this.onFilterClick.emit();
  }

}
