import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.css']
})
export class FilteringBlockComponent implements OnInit {
  @Output() onFilterChanged = new EventEmitter();
  @Output() onViewsChanged = new EventEmitter();
  @Output() onDateChanged = new EventEmitter();
  @Input() viewsTermF: undefined | boolean = undefined;
  @Input() dateTermF: undefined | boolean = undefined;
  constructor() { }

  ngOnInit(): void {
  }

  onFilterChange(e: any) {
    this.onFilterChanged.emit(e);
  }

  onViewsChange() {
    this.onViewsChanged.emit();
  }

  onDateChange() {
    this.onDateChanged.emit();
  }

}
