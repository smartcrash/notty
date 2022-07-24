import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  template: `
    <li>
      <a href="#" class="dropdown-item">
        <ng-content></ng-content>
      </a>
    </li>
  `
})
export class MenuItemComponent { }
