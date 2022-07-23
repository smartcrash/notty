import Note from "src/model/Note";
import { TableName } from "src/model/schema";
import { BaseRepository } from "./repository";

export default class NoteRepository extends BaseRepository<Note> {
  constructor() {
    super(TableName.NOTES)
  }
}
