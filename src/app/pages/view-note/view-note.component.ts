import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NoteService } from 'src/app/services/note.service';
import Note from 'src/model/Note';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
})
export class ViewNoteComponent implements OnInit {
  note!: Note
  routeParamsSubscription?: Subscription

  title: string = ''
  content: string = ''

  constructor(private route: ActivatedRoute, private noteService: NoteService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!

    this.noteService
      .getNoteById(id)
      .subscribe(note => {
        this.note = note!
        this.title = this.note.title
        this.content = this.note.content
      })
  }

  sync() {
    const { id } = this.note
    const { title, content } = this

    this.noteService.updateNote(id, { title, content })
  }
}
