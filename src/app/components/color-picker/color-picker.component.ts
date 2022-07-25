import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent {
  @Input() initialColor: string = '#FFF'
  @Output() change = new EventEmitter<string>()

  currentColor: string = this.initialColor

  readonly colors: string[] = [
    '#FFF',
    '#EF4444',
    '#F97316',
    '#16A34A',
    '#3B82F6',
    '#A855F7',
  ]

  setColor(hex: string) {
    this.currentColor = hex
    this.change.emit(hex)
  }
}
