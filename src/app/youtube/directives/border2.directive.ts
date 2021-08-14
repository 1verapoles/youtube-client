import { Directive, OnInit, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appBorder2]'
})
export class Border2Directive implements OnInit {
  @Input() publishedAt = '';

  constructor(private element: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    let diff = Math.floor((new Date().getTime() - new Date(this.publishedAt).getTime()) / 86400000);
    if (diff < 7) { this.renderer.setStyle(this.element.nativeElement, 'border-bottom', '3px solid blue'); }
    if (diff >= 7 && diff < 30) { this.renderer.setStyle(this.element.nativeElement, 'border-bottom', '3px solid green'); }
    if (diff >= 180) { this.renderer.setStyle(this.element.nativeElement, 'border-bottom', '3px solid red'); }
    if (diff >= 30 && diff < 180) { this.renderer.setStyle(this.element.nativeElement, 'border-bottom', '3px solid yellow'); }

  }

}
