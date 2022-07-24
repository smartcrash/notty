import { AfterViewInit, Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: '[appMenuButton]',
  template: `<ng-content></ng-content>`
})
export class MenuButtonComponent implements AfterViewInit {
  constructor(private readonly viewRef: ViewContainerRef) { }

  ngAfterViewInit(): void {
    const nativeElement = this.viewRef.element.nativeElement as Element

    nativeElement.setAttribute('href', '#')
    nativeElement.setAttribute('role', 'button')
    nativeElement.setAttribute('data-bs-toggle', 'dropdown')
    nativeElement.setAttribute('aria-expanded', 'false')
  }
}
