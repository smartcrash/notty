import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorService {

  constructor() { }

  getContrastYIQ(hex: string) {
    hex = hex.replace("#", "").toLowerCase();

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return (yiq >= 128) ? 'black' : 'white';
  }
}
