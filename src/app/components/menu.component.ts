import { AfterViewInit, Component, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { Dropdown } from 'bootstrap';

@Component({
  selector: 'app-menu',
  template: `
    <div class="dropdown">
      <ng-content></ng-content>
    </div>
  `
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  private bsDropdown!: Dropdown

  constructor(private readonly viewRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => {
      const nativeElement = this.viewRef.element.nativeElement as Element
      const dropdownToggle = nativeElement.getElementsByClassName('dropdown-toggle')[0]

      this.bsDropdown = new Dropdown(dropdownToggle, {})
    })
  }

  ngOnDestroy(): void {
    this.bsDropdown.dispose()
  }
}
