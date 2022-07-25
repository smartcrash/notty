import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
})
export class ColorPickerComponent implements OnInit, OnChanges {
  @Input() initialColor?: string
  @Output() change = new EventEmitter<string>()

  currentColor!: string

  readonly colors: string[] = [
    '#FFFFFF',
    '#EF4444',
    '#F97316',
    '#16A34A',
    '#3B82F6',
    '#A855F7',
  ]

  ngOnInit(): void {
    this.currentColor = this.initialColor || '#FFF'
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialColor']) {
      this.currentColor = changes['initialColor'].currentValue
    }
  }

  setColor(hex: string) {
    this.currentColor = hex
    this.change.emit(hex)
  }
}
