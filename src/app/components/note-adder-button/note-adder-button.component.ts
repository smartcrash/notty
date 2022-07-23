import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-adder-button',
  templateUrl: './note-adder-button.component.html',
})
export class NoteAdderButtonComponent implements OnInit {

  constructor(private noteService: NoteService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.noteService
      .createNote({})
      .subscribe(({ id }) => this.router.navigate(['n', id]))
  }
}
