import { Component, Input, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import Note from 'src/model/Note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
})
export class NoteCardComponent implements OnInit {
  @Input() note!: Note
  textColor!: string

  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.textColor = this.colorService.getContrastYIQ(this.note.color)
  }
}
