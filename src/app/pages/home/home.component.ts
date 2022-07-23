import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import Note from 'src/model/Note';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  allNotes: Note[] = []
  allNotesSubscription?: Subscription

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.allNotesSubscription = this.noteService
      .allNotes()
      .pipe(tap(console.log))
      .subscribe(notes => this.allNotes = notes)
  }

  ngOnDestroy(): void {
    this.allNotesSubscription?.unsubscribe()
  }
}
