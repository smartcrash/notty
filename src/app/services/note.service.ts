import { Injectable } from '@angular/core';
import { NoteRepository } from '../repositories/note.repository';

@Injectable({ providedIn: 'root' })
export class NoteService {
  constructor(private noteRepository: NoteRepository) { }
}
