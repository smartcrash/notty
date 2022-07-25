import { Component, EventEmitter, Input, Output } from '@angular/core';

type Color =
  | 'white'
  | 'red'
  | 'orange'
  | 'green'
  | 'blue'
  | 'purple'

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent {
  @Input() initialColor: Color = 'white'
  @Output() change = new EventEmitter<string>()

  currentColor: Color = this.initialColor

  readonly colorNames: Color[] = ['white', 'red', 'orange', 'green', 'blue', 'purple']

  toHex(color: Color): string {
    return ({
      white: '#FFF',
      red: '#EF4444',
      orange: '#F97316',
      green: '#16A34A',
      blue: '#3B82F6',
      purple: '#A855F7',
    })[color]
  }

  setColor(color: Color) {
    this.currentColor = color
    this.change.emit(this.toHex(color))
  }
}
