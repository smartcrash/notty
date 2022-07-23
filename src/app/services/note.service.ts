import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import Note from 'src/model/Note';
import { NoteRepository } from '../repositories/note.repository';

@Injectable({ providedIn: 'root' })
export class NoteService {
  constructor(private noteRepository: NoteRepository) { }

  allNotes(): Observable<Note[]> {
    return from(this.noteRepository.find({}))
  }

  getNoteById(id: string): Observable<Note | undefined> {
    return from(this.noteRepository.findById(id))
  }

  createNote(partialEntity: Partial<Note>): Observable<Note> {
    return from(this.noteRepository.create(partialEntity))
  }
}
