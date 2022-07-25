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
    const defaultColor = '#FFFFFF'
    return from(this.noteRepository.create({ color: defaultColor, ...partialEntity }))
  }

  updateNote(id: string, partialEntity: Partial<Note>): Observable<boolean> {
    return from(this.noteRepository.update(id, partialEntity))
  }

  deleteNote(id: string): Observable<boolean> {
    return from(this.noteRepository.delete(id))
  }
}
