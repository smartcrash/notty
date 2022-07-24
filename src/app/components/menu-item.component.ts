import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  template: `
    <li>
      <a class="dropdown-item" href="#">
        <ng-content></ng-content>
      </a>
    </li>
  `
})
export class MenuItemComponent { }
