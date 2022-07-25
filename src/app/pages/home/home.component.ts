import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import Note from 'src/model/Note';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  allNotes: Note[] = []
  columnNotes: [Note[], Note[]] = [[], []]

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    const allNotesSubscription = this.noteService
      .allNotes()
      .subscribe(notes => {
        this.allNotes = notes

        notes.forEach((note, index) => {
          const columnIndex = index % 2 === 0 ? 0 : 1
          this.columnNotes[columnIndex].push(note)
        })

        allNotesSubscription.unsubscribe()
      })
  }
}
