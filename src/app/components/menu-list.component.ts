import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-list',
  template: `
    <ul class="dropdown-menu">
      <ng-content></ng-content>
    </ul>
  `
})
export class MenuListComponent { }
