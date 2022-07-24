import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[appAutosizeTextarea]' })
export class AutosizeTextareaDirective {

  constructor(private el: ElementRef<HTMLTextAreaElement>) {
    requestAnimationFrame(() => {
      this.el.nativeElement.style.height = (this.el.nativeElement.scrollHeight) + "px";
      this.el.nativeElement.style.overflowY = 'hidden'
      this.el.nativeElement.style.resize = 'none'
    })
  }

  @HostListener('input') onInput() {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = (this.el.nativeElement.scrollHeight) + "px";
  }
}
