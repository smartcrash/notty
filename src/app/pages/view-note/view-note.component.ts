import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { ColorService } from 'src/app/services/color.service';
import { NoteService } from 'src/app/services/note.service';
import Note from 'src/model/Note';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
})
export class ViewNoteComponent implements OnInit, OnDestroy {
  note!: Note
  title: string = ''
  content: string = ''

  backgroundColor: string = '#FFFFFF'
  textColor: string = this.colorService.getContrastYIQ(this.backgroundColor)

  routerEventsSubscription?: Subscription

  constructor(private router: Router, private route: ActivatedRoute, private noteService: NoteService, private colorService: ColorService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!

    const getNoteByIdSubscription = this.noteService
      .getNoteById(id)
      .subscribe(note => {
        this.note = note!
        this.title = this.note.title
        this.content = this.note.content
        this.setBackgroundColor(this.note.color)

        getNoteByIdSubscription.unsubscribe()
      })

    this.routerEventsSubscription = this.router.events
      .pipe(filter((event) => event instanceof NavigationStart))
      .subscribe(() => {
        const { title, content } = this

        /* Delete note if is empty */
        if (!title.trim() && !content.trim()) this.delete()
      })
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription?.unsubscribe()
  }

  sync() {
    const { id } = this.note
    const { title, content, backgroundColor: color } = this

    this.noteService.updateNote(id, { title, content, color })
  }

  delete() {
    const { id } = this.note

    this.noteService
      .deleteNote(id)
      .subscribe(() => this.router.navigate(['/']))
  }

  onColorChange(hex: string) {
    this.setBackgroundColor(hex)
    this.sync()
  }

  setBackgroundColor(hex: string) {
    this.backgroundColor = hex
    this.textColor = this.colorService.getContrastYIQ(hex)
  }
}
