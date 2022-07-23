import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <a routerLink="/">
      <h1 class="font-bold flex items-center">
        <app-pencil-square-icon innerClass="w-5 h-5 mr-1 lg:mr-2"></app-pencil-square-icon>
        <span class="text-xl lg:text-2xl">Notty</span>
      </h1>
    </a>
  `
})
export class LogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
