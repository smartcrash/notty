import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appAutosizeTextarea]' })
export class AutosizeTextareaDirective {

  constructor(private el: ElementRef<HTMLTextAreaElement>) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.overflowY = 'hidden'
  }

  @HostListener('input') onInput() {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = (this.el.nativeElement.scrollHeight) + "px";
  }
}
