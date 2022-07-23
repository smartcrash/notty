import { Injectable } from "@angular/core";
import Note from "src/model/Note";
import { TableName } from "src/model/schema";
import { BaseRepository } from "./repository";

@Injectable()
export class NoteRepository extends BaseRepository<Note> {
  constructor() {
    super(TableName.NOTES)
  }
}
