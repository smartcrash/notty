import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-adder-button',
  templateUrl: './note-adder-button.component.html',
})
export class NoteAdderButtonComponent implements OnInit {

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
  }

  onClick = () => this.noteService.createNote({})
}
