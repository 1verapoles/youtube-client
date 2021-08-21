import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';
import { MONTH, SIX_MONTHS, TIMESTAMP_TO_DAYS, WEEK } from '../constants';

@Directive({
  selector: '[appBorder2]'
})
export class Border2Directive implements OnInit {
  @Input() publishedAt = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    let diff = Math.floor((new Date().getTime() - new Date(this.publishedAt).getTime()) / TIMESTAMP_TO_DAYS);
    if (diff < WEEK) { this.renderer.setStyle(this.element.nativeElement, 'border-bottom', '3px solid blue'); }
    if (diff >= WEEK && diff < MONTH) { this.renderer.setStyle(this.element.nativeElement, 'border-bottom', '3px solid green'); }
    if (diff >= SIX_MONTHS) { this.renderer.setStyle(this.element.nativeElement, 'border-bottom', '3px solid red'); }
    if (diff >= MONTH && diff < SIX_MONTHS) { this.renderer.setStyle(this.element.nativeElement, 'border-bottom', '3px solid yellow'); }

  }

}
