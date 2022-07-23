import { Component, Input, OnInit } from '@angular/core';
import Note from 'src/model/Note';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
})
export class NoteCardComponent implements OnInit {
  @Input() note!: Note

  constructor() { }

  ngOnInit(): void {
  }
}
