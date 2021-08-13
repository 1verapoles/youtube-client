import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.css']
})
export class FilteringBlockComponent {
  @Output() onFilterChanged = new EventEmitter<string>();
  @Output() onViewsChanged = new EventEmitter<void>();
  @Output() onDateChanged = new EventEmitter<void>();
  @Input() viewsTermF: undefined | boolean = undefined;
  @Input() dateTermF: undefined | boolean = undefined;

  onFilterChange(inputValue: string) {
    this.onFilterChanged.emit(inputValue);
  }

  onViewsChange() {
    this.onViewsChanged.emit();
  }

  onDateChange() {
    this.onDateChanged.emit();
  }

}
